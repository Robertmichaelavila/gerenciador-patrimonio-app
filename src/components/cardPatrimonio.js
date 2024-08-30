import { SafeAreaView , StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { AntDesign } from '@expo/vector-icons';

export function Card({ navigation, nomePatrimonio, valor }) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.item} onPress={ () => navigation.navigate('editPatrimonio') }>
        <View style={styles.descrition}>
          <Text style={styles.subtitle}>+ R$ {valor}</Text>
          <Text style={styles.title}>{nomePatrimonio}</Text>
        </View>

        <View style={styles.buttons}>
          <AntDesign name="right" size={24} color="#003B52" />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  item: {
    width: "100%",
    flexDirection: "row",
    justifyContent: 'space-between',
    height: 85,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#909090",
    backgroundColor: "#fff",
    marginBottom: 20
  },
  descrition: {
    flexDirection: "column",
    borderRadius: 10,
  },
  subtitle: {
    color: "#148E00",
    fontSize: 18,
    marginLeft: 15,
    marginTop: 5
  },
  title: {
    color: "#005A7D",
    fontSize: 29,
    fontWeight: "bold",
    marginLeft: 25
  },
  buttons: {
    marginVertical: "auto",
    alignItems: "center",
    marginRight: 33,
  },
  icon: {
    alignItems: "center"
  }
});