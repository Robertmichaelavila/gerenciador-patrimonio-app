import { useState } from "react";
import { 
  StatusBar, 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity,
  Alert,
  Dimensions 
} from "react-native";

import { Button } from "../../components/Form/button/Button"
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from '@react-native-picker/picker';
import { TextInputMask } from 'react-native-masked-text';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const {height, width} = Dimensions.get("window")

export function AddPatrimonio({ navigation }) {
  const [tipo, setTipo] = useState("Casa");
  const [valor, setValor] = useState("");
  const [data, setData] = useState([]);

  // async function salvar() {
  //   // Validação: verifica se os campos estão vazios
  //   if (!tipo || !valor) {
  //       alert("preencha os dados que faltam");
  //       return;
  //   }

  //   const novoPatrimonio = {
  //       id: Date.now().toString(),  // Adiciona um ID único para cada item
  //       tipo: tipo, 
  //       valor: valor
  //   };

  //   try {
  //       const jsonValue = await AsyncStorage.getItem("patrimonios");
  //       const patrimonios = jsonValue != null ? JSON.parse(jsonValue) : [];

  //       patrimonios.push(novoPatrimonio);
  //       await AsyncStorage.setItem("patrimonios", JSON.stringify(patrimonios));

  //       //setTipo("");
  //       setValor("");
  //       Alert.alert("Sucesso","Patrimônio Salvo");
  //       console.log(patrimonios)
  //       setData(patrimonios);
  //   } catch (e) {
  //       console.error("Erro ao salvar os dados", e);
  //   }
  // }

  async function salvar() {
    // Validação: verifica se os campos estão vazios
    if (!tipo || !valor) {
      Alert.alert("Atenção", "Preencha os dados que faltam");
      return;
    }
  
    // Converte o valor formatado para um float
    const valorFloat = parseFloat(valor.replace('R$', '').replace('.', '').replace(',', '.').trim());
  
    const novoPatrimonio = {
      id: Date.now().toString(),  // Adiciona um ID único para cada item
      tipo: tipo, 
      valor: valorFloat // Salva o valor como float
    };
  
    try {
      const jsonValue = await AsyncStorage.getItem("patrimonios");
      const patrimonios = jsonValue != null ? JSON.parse(jsonValue) : [];
  
      patrimonios.push(novoPatrimonio);
      await AsyncStorage.setItem("patrimonios", JSON.stringify(patrimonios));
  
      setValor("");
      Alert.alert("Sucesso", "Patrimônio Salvo");
      console.log(patrimonios)
      setData(patrimonios);
      navigation.navigate('menuPrincipal')
    } catch (e) {
      console.error("Erro ao salvar os dados", e);
    }
  }  

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#005A7D"}/>
      <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate("menuPrincipal")}>
        <AntDesign name="arrowleft" size={30} color="black" />
      </TouchableOpacity>
        <View style={styles.main}>
          <View style={styles.contentTitle}>
            <Text style={styles.title}>Adicionar patrimônio</Text>
          </View>

          <View style={styles.contentInput}>
            <View style={styles.boxInput}>
            <Text style={styles.label}>Tipo de Patrimônio</Text>
              <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={tipo}
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) => setTipo(itemValue)}
                >
                    <Picker.Item label="Casa" value="Casa" />
                    <Picker.Item label="Apartamento" value="Apartamento" />
                    <Picker.Item label="Carro" value="Carro" />
                    <Picker.Item label="Moto" value="Moto" />
                    <Picker.Item label="Biscicleta" value="Biscicleta" />
                    <Picker.Item label="Terreno" value="Terreno" />
                </Picker>
              </View>
            </View>

            <View style={styles.boxInput}>
              <Text style={styles.label}>Valor do Imóvel</Text>
              
                <TextInputMask
                  type={'money'}
                  options={{
                    precision: 2,
                    separator: ',',
                    delimiter: '.',
                    unit: 'R$ ',
                    suffixUnit: ''
                  }}
                  placeholder="R$ 0,00"
                  value={valor}
                  onChangeText={text => setValor(text)} // Armazena o valor não formatado
                  style={styles.input}
                  keyboardType="numeric"
                />
              
            </View>
          </View>

          <View style={styles.button}>
            <Button TextButton={'Adicionar'} onpress={salvar}/>
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: hp(100),
    justifyContent: "center",
    minWidth: "100%",
    paddingHorizontal: wp(5),
    marginHorizontal: "auto",
    marginVertical: "auto",
    backgroundColor: "#fff"
  },
  main: {
    width: wp(90)
  },
  contentTitle: {
    marginTop: hp(5)
  },
  title: {
    color: "#003B52",
    fontSize: hp(3.8),
    fontWeight: "bold",
    textAlign: "center"
  },
  contentInput: {
    width: wp(90),
    marginTop: hp(8),
    marginBottom: hp(30)
  },
  boxInput: {
    width: "100%",
    marginBottom: 30
  },
  input: {
    width: wp(90),
    fontSize: hp(2.5),
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1, // Largura da borda
    borderColor: '#BFBFBF', // Cor da borda
    borderRadius: 10, // Arredondar cantos da borda
  },
  pickerContainer: {
    borderWidth: 1, // Largura da borda
    borderColor: '#BFBFBF', // Cor da borda
    borderRadius: 10, // Arredondar cantos da borda
  },
  picker: {
    fontSize: hp(2.5),
    fontWeight: "600",
    padding: 15,
    color: "#003B52",
    borderRadius: 10, // Arredondar cantos da borda
  },
  label: {
    width: wp(90),
    color: "#005A7D",
    fontSize: hp(3),
    marginLeft: 7,
    marginBottom: 10,
    textAlign: "justify"
  },
  button: {
    position: "absolute",
    bottom: hp(0),
    width: wp(90),
    marginHorizontal: "auto"
  },
  icon: {
    position: "absolute",
    marginLeft: wp(5),
    top: hp(4.5)
  }
});