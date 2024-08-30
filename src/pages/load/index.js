import { StatusBar, StyleSheet, Text, View, Image } from "react-native";

export function Load() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#005A7D"}/>
      <View style={styles.main}>
        <View style={styles.figure}>
            <Image style={styles.image} source={require('../../assets/img/icone.png')}/>
        </View>

        <Text style={styles.title}>Salvando todos os dados...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    minWidth: "100%",
    marginVertical: "auto",
    marginHorizontal: "auto",
    backgroundColor: "#fff"
  },
  main: {
    paddingHorizontal: 20,
    alignItems: "center"
  },
  figure: {
    alignItems: "center"
  },
  image: {
    width: 180,
    height:  180
  },
  title: {
    color: "#005A7D",
    fontSize: 22,
    fontWeight: "500",
    marginTop: 40
  }
});