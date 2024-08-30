import { StatusBar, SafeAreaView , StyleSheet, Text, View, ScrollView } from "react-native";

export function Sobre() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"#005A7D"}/>
        <ScrollView>
          <View style={styles.main}>
            <Text style={styles.title}>Sobre</Text>

            <View style={styles.descrition}>
              <Text style={styles.subtitle}>Motivação do projeto</Text>
              <Text style={styles.text}>Notou-se que muitas pessoas possuem dificuldade em saber qual o total do seu patrimônio, ou saber qual é o seu patrimônio, com isso, foi gerado a necessidade de auxiliar estas pessoas com esses dados.</Text>
              <Text style={styles.text}>Ajudar as pessoas a se manterem atualizadas quanto ao seu patrimônio, desta maneira dando a ela o total controle de todas as movimentações que fizer com seus bens, móveis, imóveis, tangíveis e intangíveis. Auxiliar no preenchimento do IRPF.</Text>

              <Text style={styles.subtitle}>Desenvolvedores</Text>
              <View style={styles.containerDevs}>

                <View style={styles.devs}>
                  <View style={styles.boxDev}>
                    <View style={styles.img}></View>
                    <Text style={styles.nameDev}>Jônatas Fernandes Silva</Text>
                  </View>
        
                  <Text style={styles.text}>Desenvolvedor Fullstack/PO: Desenvolver o Back-End da aplicação e auxiliar no desenvolvimento do Front-End.</Text>
                </View>

                <View style={styles.devs}>
                  <View style={styles.boxDev}>
                    <View style={styles.img}></View>
                    <Text style={styles.nameDev}>Gustavo Menezes</Text>
                  </View>
        
                  <Text style={styles.text}>DBA/tech lead: Administrar, planejar e montar o banco de dados da aplicação além de auxiliar no desenvolvimento geral do sistema.</Text>
                </View>

                <View style={styles.devs}>
                  <View style={styles.boxDev}>
                    <View style={styles.img}></View>
                    <Text style={styles.nameDev}>Robert Michael Ávila</Text>
                  </View>
          
                  <Text style={styles.text}>Desenvolvedor Fullstack/Designer: Desenvolver o Front-End da aplicação e auxiliar no desenvolvimento do Back-End. Projetar o design da aplicação</Text>
                </View>
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
    marginHorizontal: "auto",
    backgroundColor: "#fff"
  },
  main: {
    paddingHorizontal: 10
  },
  title: {
    width: "100%",
    textAlign: "center",
    fontSize: 40,
    fontWeight: "700",
    color: "#003B52",
    marginTop: 40,
    marginBottom: 15
  },
  descrition: {
    paddingHorizontal: 20
  },
  subtitle: {
    width: "100%",
    textAlign: "justify",
    fontSize: 30,
    fontWeight: "700",
    color: "#005A7D",
    marginBottom: 20,
    marginTop: 30
  },
  text: {
    width: "100%",
    textAlign: "justify",
    fontSize: 22,
    lineHeight: 35,
    color: "#333",
    marginBottom: 30
  },
  containerDevs: {
    marginTop: 20
  },
  devs: {
    marginBottom: 20
  },
  boxDev: {
    alignItems: "center",
    marginBottom: 30
  },
  img: {
    width: "28%",
    backgroundColor: "#000",
    height: 100,
    borderRadius: 100
  },
  nameDev: {
    width: "100%",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "700",
    color: "#005A7D",
    marginTop: 30
  }

});