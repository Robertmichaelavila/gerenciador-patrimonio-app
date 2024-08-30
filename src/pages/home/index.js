import { StatusBar, SafeAreaView , StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";
import { Card } from "../../components/cardPatrimonio"

import { AntDesign } from '@expo/vector-icons';

export function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"#005A7D"}/>
        <ScrollView>
          <View style={styles.header}>
            <Text style={styles.person}>Robert Michael</Text>
            <Text style={styles.valueTotal}>R$ 230,000</Text>
          </View>

          <View style={styles.main}>
            <View style={styles.boxButton}>
              <View style={styles.contentButton}>
                <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('Patrimonios') }>
                  <AntDesign name="plus" size={26} color="#FFF" />
                </TouchableOpacity>
                  <Text style={styles.labelButton}>Adicionar</Text>
              </View>

              <View style={styles.contentButton}>
                <TouchableOpacity style={styles.button}>
                  <AntDesign name="areachart" size={24} color="#FFF" />
                </TouchableOpacity>
                  <Text style={styles.labelButton}>Simulações</Text>
              </View>

              <View style={styles.contentButton}>
                <TouchableOpacity style={styles.button}>
                  <AntDesign name="profile" size={24} color="#FFF" />
                </TouchableOpacity>
                  <Text style={styles.labelButton}>Sobre</Text>
              </View>

            </View>

            <View style={styles.listPatrimonios}>
              <Text style={styles.title}>Últimos lançamentos</Text>

              <View style={styles.list}>
                <Card nomePatrimonio={"Casa Própria"} valor={"40.000"} />
                <Card nomePatrimonio={"Apartamento"} valor={"130.000"} />
                <Card nomePatrimonio={"Automóvel"} valor={"60.000"} />
              </View>
            </View>
          </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    minWidth: "100%",
    minHeight: "100%",
    marginHorizontal: "auto",
    backgroundColor: "#E3E3E3"
  },
  header: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#005A7D",
    paddingTop: 100,
    paddingBottom: 20,
    paddingHorizontal: 20
  },
  person: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
  },
  valueTotal: {
    color: "#005A7D",
    fontSize: 20,
    fontWeight: "700",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 15
  },
  main: {
    paddingHorizontal: 20
  },
  boxButton: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: 40
  },
  contentButton: {
    alignItems: "center",
    marginHorizontal: 15
  },
  labelButton: {
    color: "#333",
    fontSize: 16,
    fontWeight: "500",
    marginTop: 10
  },
  button: {
    padding: 23,
    backgroundColor: "#005A7D",
    borderRadius: 50,
    boxButton: 2
  },
  textButtton: {
    fontSize: 20,
    color: "#fff"
  },
  listPatrimonios: {
    width: "100%",
    marginTop: 40
  },
  title: {
    color: "#003B52",
    fontSize: 23,
    fontWeight: "700"
  },
  list: {
    marginTop: 30,
    alignItems: "flex-start"
  }
});