import { StatusBar, StyleSheet, Text, View, TextInput ,TouchableOpacity } from "react-native";

import { AntDesign } from '@expo/vector-icons';

export function EditPatrimonio({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#005A7D"}/>
        <TouchableOpacity style={styles.icon} onPress={ () => navigation.navigate('menu') }>
          <AntDesign name="close" size={30} color="black" />
        </TouchableOpacity>
        <View style={styles.main}>
          <Text style={styles.title}>Patrimônio</Text>

          <View style={styles.contentInput}>
            <View style={styles.boxInput}>
              <Text style={styles.label}>Tipo de Patrimônio</Text>
              <TextInput
                  style={styles.input}
                  minHeight= {20}
                  maxLength={40}
                  //onChangeText={onChangeNumber}
                  placeholder="Casa"
              />
            </View>

            <View style={styles.boxInput}>
              <Text style={styles.label}>Valor do Imóvel</Text>
              <TextInput
                  style={styles.input}
                  minHeight= {1}
                  maxLength={6}
                  //onChangeText={onChangeNumber}
                  placeholder="R$ 0,00"
              />
            </View>

          </View>

          <View style={styles.boxButtton}>
            <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('menu') }>
              <Text style={styles.textButton}>Editar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonDelete} onPress={ () => navigation.navigate('menu') }>
              <Text style={styles.textButtonDelete}>Excluir</Text>
            </TouchableOpacity>
          </View>
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
  title: {
    color: "#003B52",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "justify",
    textAlign: "center",
    marginTop: 20
  },
  subtitle: {
    color: "#005A7D",
    fontSize: 24,
    marginTop: 10,
    textAlign: "justify"
  },
  contentInput: {
    alignItems: "center",
    marginTop: 50,
    marginBottom: 40
  },
  boxInput: {
    width: "100%",
    marginBottom: 30
  },
  label: {
    width: "100%",
    color: "#005A7D",
    fontSize: 23,
    marginLeft: 7,
    marginBottom: 10,
    textAlign: "justify"
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
  boxButtton: {
    flexDirection: "row",
    marginTop: 80,
  },
  button: {
    width: "40%",
    backgroundColor: "#005A7D",
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginHorizontal: "auto",
    borderRadius: 10
  },
  buttonDelete: {
    width: "40%",
    backgroundColor: "#E3E3E3",
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginHorizontal: "auto",
    borderWidth: 1, // Largura da borda
    borderColor: '#BFBFBF', // Cor da borda
    borderRadius: 10, // Arredondar cantos da borda
  },
  textButton: {
    color: "#fff",
    fontSize: 25,
    padding: 0,
    fontWeight: "bold",
    textAlign: "center",
  },
  textButtonDelete: {
    color: "red",
    fontSize: 25,
    padding: 0,
    fontWeight: "bold",
    textAlign: "center",
  },
  icon: {
    marginTop: 25,
    marginLeft: 25
  }
});