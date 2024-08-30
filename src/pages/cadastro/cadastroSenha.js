import { StatusBar, StyleSheet, Text, View, TextInput ,TouchableOpacity } from "react-native";

import { AntDesign } from '@expo/vector-icons';

export function CadastroSenha({ navigation }) {
  return (
    <View style={styles.container}>
        <View style={styles.main}>
          <TouchableOpacity style={styles.icon}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
          <View style={styles.contentTitle}>
            <Text style={styles.title}>Defina uma senha</Text>
            <Text style={styles.subtitle}>Precisamos que digite um Pin para proteger seus dados.</Text>
          </View>

          <View style={styles.contentInput}>
            <TextInput
                style={styles.input}
                //onChangeText={onChangeNumber}
                placeholder="*********"
            />
          </View>


          <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('addPatrimonio') }>
            <Text style={styles.textButton}>Avançar</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    minWidth: "100%",
    marginHorizontal: "auto",
    backgroundColor: "#fff"
  },
  main: {
    paddingHorizontal: 20
  },
  contentTitle: {
    alignItems: "flex-start"
  },
  title: {
    color: "#003B52",
    fontSize: 45,
    fontWeight: "bold",
    textAlign: "justify"
  },
  subtitle: {
    color: "#005A7D",
    fontSize: 24,
    marginTop: 10,
    textAlign: "justify"
  },
  contentInput: {
    width: "100%",
    marginTop: 90,
    marginBottom: 100
  },
  input: {
    width: "100%",
    fontSize: 23,
    height: 60,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1, // Largura da borda
    borderColor: '#BFBFBF', // Cor da borda
    borderRadius: 10, // Arredondar cantos da borda
  },
  button: {
    color: "#000",
    backgroundColor: "#005A7D",
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
    width: "60%",
    marginTop: 150,
    marginHorizontal: "auto"
  },
  textButton: {
    color: "#fff",
    fontSize: 25,
    padding: 0,
    fontWeight: "bold",
    textAlign: "center",
  },
  icon: {
    marginLeft: 25
  }
});