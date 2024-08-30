import { useEffect, useState } from "react";
import { 
  StatusBar, 
  SafeAreaView, 
  StyleSheet, 
  Text, 
  View, 
  FlatList,
  TouchableOpacity,
  Alert,
  Dimensions 
} from "react-native";

import { AntDesign } from '@expo/vector-icons';
import { Card } from "../../components/cardPatrimonio"
import AsyncStorage from '@react-native-async-storage/async-storage';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const {height, width} = Dimensions.get("window")

export function Patrimonios({ navigation }) {
  const [data, setData] = useState([]);

  async function deletarPatrimonio(id) {
    try {
        const jsonValue = await AsyncStorage.getItem("patrimonios");
        const patrimonios = jsonValue != null ? JSON.parse(jsonValue) : [];

        const patrimoniosAtualizados = patrimonios.filter(item => item.id !== id);
        await AsyncStorage.setItem("patrimonios", JSON.stringify(patrimoniosAtualizados));

        setData(patrimoniosAtualizados);
        Alert.alert("Sucesso", "Item deletado");
    } catch (e) {
        console.error("Erro ao deletar o item", e);
    }
  }

  const actionFunction = (item) => {
    deletarPatrimonio(item.id)
  }

  useEffect(() => {
    const mostrarPatrimonio = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem("patrimonios");
            const patrimonios = jsonValue != null ? JSON.parse(jsonValue) : [];
            setData(patrimonios);
        } catch (error) {
            console.error("Erro ao carregar os dados", error);
        }
    };

    mostrarPatrimonio();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"#005A7D"}/>
        <TouchableOpacity style={styles.icon} onPress={ () => navigation.navigate('menuPrincipal') }>
          <AntDesign name="close" size={30} color="black" />
        </TouchableOpacity>

        <View style={styles.main}>
          <Text style={styles.title}>Meus Patrimônios</Text>
          <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Card name={"delete"} nomePatrimonio={item.tipo} valor={item.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} onpress={() => actionFunction(item)}/>
            )}
          />
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: hp(100),
    justifyContent: "center",
    minWidth: "100%",
    paddingHorizontal: wp(5),
    marginHorizontal: "auto",
    backgroundColor: "#fff"
  },
  title: {
    width: wp(90),
    textAlign: "center",
    fontSize: hp(3.8),
    fontWeight: "700",
    color: "#003B52",
    marginTop: hp(12),
    marginBottom: hp(5)
  },
  main: {
    width: wp(100),
    height: hp(100),
    marginBottom: hp(4)
  },
  icon: {
    position: "absolute",
    top: hp(4.5),
    marginLeft: wp(5)
  }
});