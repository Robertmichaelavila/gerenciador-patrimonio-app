import { useState } from "react"

import { 
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Text, 
  View, 
  TouchableOpacity,
  ScrollView, 
  Dimensions
} from "react-native";

import { ButtonClear } from "../../components/Form/button/ButtonClear"

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const {height, width} = Dimensions.get("window")

import { AntDesign } from '@expo/vector-icons';

export function Ajuda({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"#005A7D"}/>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableOpacity style={styles.icon} onPress={ () => navigation.navigate('menuPrincipal') }>
              <AntDesign name="close" size={30} color="black" />
          </TouchableOpacity>
          <View style={styles.main}>
            <Text style={styles.title}>Ajuda</Text>

            <Text style={styles.text}>Bem-vindo ao Gerenciador de Patrimônios, Estamos aqui para ajudar você a aproveitar ao máximo todas as funcionalidades do nosso aplicativo. Este guia foi desenvolvido para oferecer dicas e orientações que facilitarão a sua experiência. Nesta página você poderá tirar suas dúvidas sobre o funcionamento do App!</Text>

            <Text style={styles.subtitle}>Perguntas frequentes!</Text>

            <View>
              <View style={styles.boxButton}>
                <ButtonClear TextButton={'Como adicionar um patrimônio?'} onpress={ () => navigation.navigate('ResAddPatrimonio') } />
              </View>

              {/* <View style={styles.boxButton}>
                <ButtonClear TextButton={'Como criar uma simulação?'} onpress={ () => navigation.navigate('cadastroNome') }/>
              </View> */}

              {/* <View style={styles.boxButton}>
                <ButtonClear TextButton={'Como editar um patrimônio?'} onpress={ () => navigation.navigate('cadastroNome') }/>
              </View>

              <View style={styles.boxButton}>
                <ButtonClear TextButton={'Como editar uma simulação?'} onpress={ () => navigation.navigate('cadastroNome') }/>
              </View> */}
              
              <View style={styles.boxButton}>
                <ButtonClear TextButton={'Como excluir um patrimônio?'} onpress={ () => navigation.navigate('ResDelPatrimonio') }/>
              </View>

              {/* <View style={styles.boxButton}>
                <ButtonClear TextButton={'Como excluir uma simulação?'} onpress={ () => navigation.navigate('cadastroNome') }/>
              </View> */}

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
        fontSize: hp(3.8),
        fontWeight: "700",
        color: "#003B52",
        marginTop: hp(12),
        marginVertical: hp(5)
    },
    text: {
        width: "100%",
        textAlign: "justify",
        fontSize: hp(2.5),
        lineHeight: 35,
        color: "#333"
    },
    subtitle: {
      width: "100%",
      textAlign: "justify",
      fontWeight: "600",
      fontSize: hp(3),
      lineHeight: 35,
      color: "#003B52",
      marginTop: hp(3),
      marginBottom: hp(6)
  },
  boxButton: {
    marginBottom: hp(3)
  },
  icon: {
    position: "absolute",
    top: hp(4.5)
  }
})