import { 
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Text, 
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from "react-native";

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const {height, width} = Dimensions.get("window")

import { AntDesign } from '@expo/vector-icons';

export function ResDelPatrimonio({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"#005A7D"}/>
      <TouchableOpacity style={styles.icon} onPress={ () => navigation.navigate('Ajuda') }>
        <AntDesign name="arrowleft" size={30} color="black" />
      </TouchableOpacity>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.main}>
            <Text style={styles.title}>Como Excluir um Patrimônio?</Text>

            <Text style={styles.text}>Para excluir um Patrimônio é necessário seguir alguns passos. Siga as instruções e tenha a melhor experiência em nosso App!</Text>

            <View style={styles.box}>
              <Text style={styles.subtitle}>Passo 1:</Text>
              <Text style={styles.text}>No menu principal, aperte o botão com o nome "Patrimônios".</Text>
              <View>
                <Image style={styles.imagem} source={require('../../../assets/img/menuDel.png')}/>
              </View>
            </View>
            <View style={styles.box}>
              <Text style={styles.subtitle}>Passo 2:</Text>
              <Text style={styles.text}>Dentro da tela dos patrimônios, no aperte ícone de lixeira do patrimônio que você deseja excluir.</Text>
              <View>
                <Image style={styles.imagem} source={require('../../../assets/img/deletar.png')}/>
              </View>
              <Text style={styles.text}>Você verá a aba de patrimônios vazia se caso você não tiver adicionado mais de um patrimônio.</Text>
              <View>
                <Image style={styles.imagem} source={require('../../../assets/img/resultDel.jpg')}/>
              </View>
            </View>
          </View>
        </ScrollView>
    </SafeAreaView>
  )
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
        width: wp(90),
        marginBottom: hp(10)
    },
    title: {
        width: "100%",
        textAlign: "center",
        fontSize: hp(3.5),
        fontWeight: "700",
        color: "#003B52",
        marginTop: hp(8),
        marginBottom: hp(4)
    },
    text: {
        width: "100%",
        textAlign: "justify",
        fontSize: hp(2.5),
        lineHeight: 35,
        color: "#333",
        marginBottom: hp(2)
    },
    subtitle: {
      width: "100%",
      textAlign: "justify",
      fontWeight: "600",
      fontSize: hp(3),
      lineHeight: 35,
      color: "#003B52",
      marginBottom: hp(1)
    },
    box: {
      marginTop: hp(3)
    },
    imagem: {
      width: wp(70),
      height: hp(70),
      marginHorizontal: "auto",
      borderWidth: 2,
      borderColor: "#333333",
      borderRadius: 10,
      marginBottom: hp(2)
    },
    icon: {
      marginTop: hp(4.5)
    }
})