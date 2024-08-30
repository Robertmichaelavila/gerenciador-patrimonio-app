import { 
  StatusBar, 
  SafeAreaView, 
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions 
} from "react-native";

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const {height, width} = Dimensions.get("window")

import { AntDesign } from '@expo/vector-icons';

export function Sobre({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"#005A7D"}/>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableOpacity style={styles.icon} onPress={ () => navigation.navigate('menuPrincipal') }>
            <AntDesign name="arrowleft" size={30} color={"#000"}/>
          </TouchableOpacity>

          <View style={styles.main}>
            <Text style={styles.title}>Sobre</Text>

            <View style={styles.descrition}>
              <Text style={styles.subtitle}>Motivação do projeto</Text>
              <Text style={styles.text}>Notou-se que muitas pessoas possuem dificuldade em saber qual o total do seu patrimônio, ou saber qual é o seu patrimônio, com isso, foi gerado a necessidade de auxiliar estas pessoas com esses dados.</Text>
              <Text style={styles.text}>Ajudar as pessoas a se manterem atualizadas quanto ao seu patrimônio, desta maneira dando a ela o total controle de todas as movimentações que fizer com seus bens, móveis, imóveis, tangíveis e intangíveis. Auxiliar no preenchimento do IRPF.</Text>

              <Text style={styles.subtitle}>Desenvolvedores</Text>
              <View style={styles.containerDevs}>

                <View style={styles.devs}>
                  <View style={styles.boxDev}>
                    <View style={styles.img}>
                      <Image style={styles.img} source={require('../../assets/img/img_desenvolvedor_jonatas.jpg')} alt="Imagem do Desenvolvedor BackEnd"/>
                    </View>
                    <Text style={styles.nameDev}>Jônatas Fernandes Silva</Text>
                  </View>
        
                  <Text style={styles.text}>
                    <Text style={styles.textStrong}>Desenvolvedor Fullstack/PO:</Text> Desenvolver o Back-End da aplicação e auxiliar no desenvolvimento do Front-End.</Text>
                </View>

                <View style={styles.devs}>
                  <View style={styles.boxDev}>
                    <View style={styles.img}>
                      <Image style={styles.img} source={require('../../assets/img/img_desenvolvedor_gustavo.jpg')} alt="Imagem do Desenvolvedor BackEnd"/>
                    </View>
                    <Text style={styles.nameDev}>Gustavo Menezes</Text>
                  </View>
        
                  <Text style={styles.text}>
                    <Text style={styles.textStrong}>DBA/tech lead:</Text> Administrar, planejar e montar o banco de dados da aplicação além de auxiliar no desenvolvimento geral do sistema.</Text>
                </View>

                <View style={styles.devs}>
                  <View style={styles.boxDev}>
                    <View style={styles.img}>
                      <Image style={styles.img} source={require('../../assets/img/img_desenvolvedor_robert.jpg')} alt="Imagem do Desenvolvedor FrontEnd"/>
                    </View>
                    <Text style={styles.nameDev}>Robert Michael Ávila</Text>
                  </View>
          
                  <Text style={styles.text}>
                    <Text style={styles.textStrong}>Desenvolvedor Fullstack/Designer:</Text> Desenvolver o Front-End da aplicação e auxiliar no desenvolvimento do Back-End. Projetar o design da aplicação</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
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
  main: {
    width: wp(90)
  },
  title: {
    width: "100%",
    textAlign: "center",
    fontSize: hp(3.8),
    fontWeight: "700",
    color: "#003B52",
    marginTop: hp(5),
    marginBottom: hp(5)
  },
  subtitle: {
    width: "100%",
    textAlign: "justify",
    fontSize: hp(3),
    fontWeight: "600",
    color: "#005A7D",
    marginBottom: hp(3)
  },
  text: {
    width: "100%",
    textAlign: "justify",
    fontSize: hp(2.5),
    lineHeight: 35,
    color: "#333",
    marginBottom: 30
  },
  containerDevs: {
    marginTop: hp(4)
  },
  devs: {
    marginBottom: hp(4)
  },
  boxDev: {
    alignItems: "center",
    marginBottom: hp(4)
  },
  img: {
    width: 150,
    height: 150,
    borderRadius: 100,
    elevation: 30,
    backgroundColor: "#005A7D",
  },
  nameDev: {
    width: "100%",
    textAlign: "center",
    fontSize: hp(3),
    fontWeight: "700",
    color: "#005A7D",
    marginTop: 30
  },
  textStrong: {
    fontWeight: "600",
    color: "#005A7D"
  },
  icon: {
    top: hp(4.5)
  }
});