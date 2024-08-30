import { useState } from "react";
import { 
  StatusBar, 
  StyleSheet, 
  Text, 
  View, 
  TextInput,
  TouchableOpacity, 
  Dimensions 
} from "react-native";

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const {height, width} = Dimensions.get("window")

import { Button } from "../../components/Form/button/Button"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AntDesign } from '@expo/vector-icons';

export function CadastroNome({ navigation }) {
  const [nome, setNome] = useState(''); 

  const handleSubmit = async () => {
    try {
      await AsyncStorage.setItem('@name', nome);
      navigation.navigate('menuPrincipal');
    } catch (error) {
      console.error('Erro ao salvar os dados no AsyncStorage:', error);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#005A7D"}/>
      {/* <TouchableOpacity style={styles.icon} onPress={ () => navigation.navigate('login') }>
        <AntDesign name="arrowleft" size={30} color="black" />
      </TouchableOpacity> */}
        <View style={styles.main}>
          <View style={styles.contentTitle}>
            <Text style={styles.title}>Digite o seu nome?</Text>
            <Text style={styles.subtitle}>Precisamos do seu nome para uma melhor identificação e experiêcia para você.</Text>
          </View>

          <View style={styles.contentInput}>
            <TextInput
                style={styles.input}
                value={nome}
                onChangeText={setNome}
                minValue= {30}
                maxValue={50}
                placeholder={"Nome e sobrenome"}
              />
          </View>


          <View style={styles.button}>
            <Button TextButton={'Entrar'} onpress={handleSubmit}/>
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: hp(100),
    justifyContent: "center",
    paddingHorizontal: wp(5),
    marginHorizontal: "auto",
    marginVertical: "auto",
    backgroundColor: "#fff"
  },
  main: {
    width: wp(90)
  },
  contentTitle: {
    alignItems: "flex-start",
    marginTop: hp(5)
  },
  title: {
    color: "#003B52",
    fontSize: hp(4),
    fontWeight: "bold",
    textAlign: "justify"
  },
  subtitle: {
    color: "#005A7D",
    fontSize: hp(3),
    marginTop: 10,
    textAlign: "justify"
  },
  input: {
    width: wp(90),
    fontSize: hp(2.5),
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1, // Largura da borda
    borderColor: '#BFBFBF', // Cor da borda
    borderRadius: 10, // Arredondar cantos da borda
  },
  contentInput: {
    width: wp(90),
    marginTop: hp(10),
    marginBottom: hp(40)
  },
  button: {
    position: "absolute",
    bottom: hp(0),
    width: wp(90),
    marginHorizontal: "auto"
  },
  icon: {
    position: "absolute",
    marginLeft: wp(5),
    top: hp(4.5)
  }
});