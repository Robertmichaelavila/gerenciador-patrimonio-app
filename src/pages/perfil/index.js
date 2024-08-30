import { StatusBar, StyleSheet, Text, View, TextInput ,TouchableOpacity } from "react-native";

export function Perfil() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#005A7D"}/>
        <View style={styles.main}>
          <View>
            <Text style={styles.title}>Minha conta</Text>
          </View>

          <View style={styles.contentInput}>
            <View style={styles.boxInput}>
              <Text style={styles.label}>Minha conta</Text>
              <TextInput
                  style={styles.input}
                  minHeight= {30}
                  maxLength={50}
                  //onChangeText={onChangeNumber}
                  placeholder="Nome completo"
              />
            </View>

            <View style={styles.boxInput}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                  style={styles.input}
                  minHeight= {10}
                  maxLength={50}
                  //onChangeText={onChangeNumber}
                  placeholder="email@gmail.com"
              />
            </View>

            <View style={styles.boxInput}>
              <Text style={styles.label}>Senha</Text>
              <TextInput
                  style={styles.input}
                  minHeight= {1}
                  maxLength={6}
                  //onChangeText={onChangeNumber}
                  placeholder="********"
              />
            </View>
          </View>


          <View style={styles.contentButton}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.textButton}>Salvar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonClean}>
              <Text style={styles.textButtonClean}>Alterar dados</Text>
            </TouchableOpacity>
          </View>
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
    width: "100%",
    color: "#003B52",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center"
  },
  contentInput: {
    marginTop: 60,
    marginBottom: 80
  },
  boxInput: {
    width: "100%",
    marginBottom: 18
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
  contentButton: {
    width: "100%",
    flexDirection: 'row',
    marginTop: 30,
    marginHorizontal: "auto"
  },
  button: {
    width: "30%",
    backgroundColor: "#005A7D",
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginHorizontal: "auto"
  },
  buttonClean: {
    width: "50%",
    backgroundColor: "#fff",
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
  textButtonClean: {
    color: "#005A7D",
    fontSize: 25,
    padding: 0,
    fontWeight: "bold",
    textAlign: "center",
  }
});