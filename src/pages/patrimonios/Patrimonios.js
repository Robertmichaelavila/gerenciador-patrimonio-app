import { StatusBar, SafeAreaView , StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import { Card } from "../../components/cardPatrimonio"

import { AntDesign } from '@expo/vector-icons';

export function Patrimonios({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"#005A7D"}/>
        <ScrollView>
          <TouchableOpacity style={styles.icon} onPress={ () => navigation.navigate('menu') }>
            <AntDesign name="close" size={30} color="black" />
          </TouchableOpacity>
          <Text style={styles.title}>Meus Patrimônios</Text>

          <View style={styles.main}>
            <Card nomePatrimonio={"Casa Própria"}/>
            <Card nomePatrimonio={"Apartamento"}/>
            <Card nomePatrimonio={"Apartamento"}/>
            <Card nomePatrimonio={"Loja"}/>
            <Card nomePatrimonio={"Automóvel"}/>
          </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    minWidth: "100%",
    minHeight: "100%",
    marginHorizontal: "auto",
    backgroundColor: "#E3E3E3"
  },
  title: {
    width: "100%",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "700",
    color: "#003B52",
    marginTop: 30,
    marginBottom: 50
  },
  main: {
    paddingHorizontal: 20
  },
  icon: {
    marginTop: 25,
    marginLeft: 25
  }
});