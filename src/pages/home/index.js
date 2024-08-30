import { useState } from "react"
import React, { useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { 
  StatusBar, 
  SafeAreaView, 
  StyleSheet, 
  Text, 
  View, 
  Image,
  FlatList,
  TouchableOpacity, 
  ScrollView, 
  BackHandler,
  Alert,
  Dimensions
} from "react-native";

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const {height, width} = Dimensions.get("window")

import { AntDesign } from '@expo/vector-icons';
import Setting from '@expo/vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Card } from "../../components/cardPatrimonio";

import FontAwesome from '@expo/vector-icons/FontAwesome';

export function Home({ navigation }) {

  const [resultado, setResultado] = useState(0);
  const [data, setData] = useState([]);
  const [dataNome, setDataNome] = useState('');

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        Alert.alert(
          "Sair",
          "Você tem certeza que quer sair?",
          [
            { text: "Não", onPress: () => null, style: "cancel" },
            { text: "Sim", onPress: () => BackHandler.exitApp() }
          ]
        );
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      const somarAtributos = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('patrimonios');
          const listaObjetos = jsonValue != null ? JSON.parse(jsonValue) : [];
          console.log('Lista de objetos:', listaObjetos); // Log do array

          // Somar diretamente os valores numéricos
          const somaTotal = listaObjetos.reduce((soma, item) => {
            const valorFloat = item.valor || 0;  // Aqui o valor já é um número, então não precisa de conversão
            return soma + valorFloat;
          }, 0);

          console.log('Soma Total:', somaTotal); // Log do resultado
          setResultado(somaTotal);
        } catch (e) {
          console.error('Erro ao recuperar os itens do AsyncStorage:', e);
        }
      };

      somarAtributos();

      return () => {
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
      };
    }, [navigation])
  );

  // useEffect(() => {
  //   const mostrarPatrimonio = async () => {
  //       try {
  //           const jsonValue = await AsyncStorage.getItem("patrimonios");
  //           const patrimonios = jsonValue != null ? JSON.parse(jsonValue) : [];
  //           setData(patrimonios);
  //       } catch (error) {
  //           console.error("Erro ao carregar os dados", error);
  //       }
  //   };

  //   mostrarPatrimonio();
  // }, []);

  useEffect(() => {
    const mostrarPatrimonio = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("patrimonios");
        let patrimonios = jsonValue != null ? JSON.parse(jsonValue) : [];

        // Filtrar os três últimos itens
        const ultimosTresItens = patrimonios.slice(-3).reverse();
        setData(ultimosTresItens);
      } catch (error) {
        console.error("Erro ao carregar os dados", error);
      }
    };

    mostrarPatrimonio();
  }, [data]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedData = await AsyncStorage.getItem('@name');
        if (storedData !== null) {
          setDataNome(storedData);
        }
      } catch (error) {
        console.error('Erro ao recuperar os dados do AsyncStorage:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"#005A7D"}/>
        <ScrollView>
          <View style={styles.header}>
            <View style={styles.figure}>
              <Image style={styles.imagem} source={require('../../assets/img/icon_secundario.png')}/>
            </View>

            <Text style={styles.subtitle}>Seja bem vindo(a)</Text>
            <Text style={styles.person}>{dataNome}</Text>
          </View>

          <View style={styles.main}>
            <View style={styles.contentValue}>
              <Text style={styles.subtitlevalueTotal}>Valor Total</Text>
              <Text style={styles.valueTotal}>{resultado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Text>
            </View>

            <View style={styles.boxButton}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.contentButton}>
                  <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('addPatrimonio') }>
                    <AntDesign name="plus" size={24} color="#FFF" />
                  </TouchableOpacity>
                    <Text style={styles.labelButton}>Adicionar</Text>
                </View>

                <View style={styles.contentButton}>
                  <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('Patrimonios') }>
                    <FontAwesome name="dollar" size={24} color="#FFF" paddingHorizontal={5}/>
                  </TouchableOpacity>
                    <Text style={styles.labelButton}>Patrimônios</Text>
                </View>

                <View style={styles.contentButton}>
                  <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('sobre') }>
                    <AntDesign name="profile" size={24} color="#FFF" />
                  </TouchableOpacity>
                    <Text style={styles.labelButton}>Sobre</Text>
                </View>

                <View style={styles.contentButton}>
                  <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('Ajuda') }>
                    <FontAwesome name="question" size={24} color="#FFF" style={{paddingHorizontal: wp(1.2)}}/>
                  </TouchableOpacity>
                    <Text style={styles.labelButton}>Ajuda</Text>
                </View>
              </ScrollView>
            </View>

            <View style={styles.listPatrimonios}>
              <Text style={styles.title}>Últimos lançamentos</Text>
                <View style={styles.box}>
                  {data.length > 0 ? (
                    <FlatList
                      data={data}
                      scrollEnabled={false}
                      keyExtractor={(item) => item.id.toString()} // Certifique-se de que item.id existe
                      renderItem={({ item }) => (
                        <Card nomePatrimonio={item.tipo} valor={item.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}/>
                      )}
                    />
                  ) : (
                    <Text style={styles.vazio}>Nenhum item adicionado</Text>
                  )}
                </View>
            </View>
          </View>
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp(100),
    height: hp(100),
    justifyContent: "center",
    minWidth: "100%",
    minHeight: "100%",
    marginHorizontal: "auto",
    backgroundColor: "#F3F3F3"
  },
  header: {
    flexDirection: "column",
    width: wp(100),
    justifyContent: "space-between",
    backgroundColor: "#005A7D",
    paddingTop: hp(1),
    paddingBottom: hp(2)
  },
  figure: {
    flexDirection: "row",
    width: wp(100),
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: hp(2),
    marginLeft: hp(0.3)
  },
  setting: {
    alignItems: "flex-end",
    marginRight: hp(3.3)
  },
  imagem: {
    width: wp(17),
    height: hp(12.5),
    borderRadius: 99,
    alignItems: "flex-start"
  },
  subtitle: {
    color: "#dcdcdc",
    fontSize: hp(2.3),
    fontWeight: "500",
    marginBottom: hp(2),
    paddingLeft: hp(2)
  },
  person: {
    color: "#FFFFFF",
    fontSize: hp(3),
    fontWeight: "bold",
    marginBottom: hp(1),
    paddingLeft: hp(2)
  },
  main: {
    width: wp(100)
  },
  contentValue: {
    paddingLeft: wp(4),
    paddingVertical: hp(3),
    borderBottomWidth: 1,
    borderBottomColor: "#d3d3d3"
  },
  subtitlevalueTotal: {
    color: "#606060",
    fontSize: hp(2.2),
    fontWeight: "500",
    marginBottom: hp(2.5)
  },
  valueTotal: {
    color: "#005A7D",
    fontSize: hp(2.5),
    fontWeight: "700",
    marginLeft: wp(3),
    marginBottom: hp(1)
  },
  boxButton: {
    flexDirection: "row",
    width: wp(100),
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: hp(7),
    marginBottom: hp(8)
  },
  contentButton: {
    alignItems: "center",
    marginHorizontal: wp(4)
  },
  labelButton: {
    color: "#606060",
    fontSize: hp(2),
    fontWeight: "500",
    marginTop: hp(1.3)
  },
  button: {
    paddingHorizontal: wp(6),
    paddingVertical: hp(3),
    backgroundColor: "#005A7D",
    borderRadius: 100,
    boxButton: 2,
    borderWidth: 1,
    borderColor: "#005A7D"
  },
  listPatrimonios: {
    width: wp(100)
  },
  box: {
    width: wp(100),
    marginTop: hp(3),
    alignItems: "center",
    flexGrow: 2, // Permite que o FlatList cresça dentro do ScrollView
  },
  title: {
    color: "#003B52",
    fontSize: hp(3),
    marginLeft: wp(4),
    fontWeight: "700"
  },
  vazio: {
    color: "#606060",
    fontSize: hp(2.6),
    fontWeight: "500",
    marginHorizontal: "auto",
    marginVertical: hp(9)
  }
})