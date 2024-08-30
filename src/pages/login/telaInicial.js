import { StatusBar, StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export function PageInitial({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#005A7D"}/>
        <View style={styles.main}>
            <Image style={styles.icone} source={require('../../assets/img/icon_principal.png')} />

            <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('login') }>
                <Text style={styles.textButton}>Entrar</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    minWidth: "100%",
    marginHorizontal: "auto", 
    marginVertical: "auto",
    backgroundColor: "#fff"
  },
  main: {
    paddingHorizontal: 20
  },
  title: {
    color: "#003B52",
    fontSize: 45,
    fontWeight: "bold",
    textAlign: "justify"
  },
  subtitle: {
    width: "100%",
    color: "#005A7D",
    fontSize: 24,
    marginTop: 10,
    textAlign: "justify"
  },
  icone: {
    width: 300,
    height: 300,
    marginHorizontal: "auto",
    marginTop: 100,
    marginBottom: 100,
  },
  button: {
    color: "#000",
    backgroundColor: "#005A7D",
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
    width: "80%",
    marginTop: 60,
    marginHorizontal: "auto"
  },
  textButton: {
    color: "#fff",
    fontSize: 25,
    padding: 0,
    fontWeight: "bold",
    textAlign: "center",
  }
});
