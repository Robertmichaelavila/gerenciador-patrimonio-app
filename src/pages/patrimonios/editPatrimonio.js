import { 
  StatusBar, 
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity,
  Dimensions 
} from "react-native";

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const {height, width} = Dimensions.get("window")


import { InputNumeric } from "../../components/Form/input/InputNumeric";
import { Button } from "../../components/Form/button/Button"

import { AntDesign } from '@expo/vector-icons';

export function EditPatrimonio({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#005A7D"}/>
        <TouchableOpacity style={styles.icon} onPress={ () => navigation.navigate('Patrimonios') }>
          <AntDesign name="close" size={30} color="black" />
        </TouchableOpacity>
        <View style={styles.main}>
          <Text style={styles.title}>Patrimônio</Text>

          <View style={styles.contentInput}>
            <View style={styles.boxInput}>
              <Text style={styles.label}>Tipo de Patrimônio</Text>
              
            </View>

            <View style={styles.boxInput}>
              <Text style={styles.label}>Valor do Imóvel</Text>
              <InputNumeric
                minValue= {1}
                maxValue={10}
                placeholder={"R$ 0,00"}
              />
            </View>

          </View>

          <View style={styles.boxButtton}>
            <Button TextButton={'Editar dados'}/>
            <TouchableOpacity style={styles.buttonDelete} onPress={ () => navigation.navigate('Patrimonios') }>
              <Text style={styles.textButtonDelete}>Excluir</Text>
            </TouchableOpacity>
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
  title: {
    marginTop: hp(5),
    color: "#003B52",
    fontSize: hp(3.8),
    fontWeight: "bold",
    textAlign: "center",
  },
  contentInput: {
    width: wp(90),
    marginTop: hp(4),
  },
  boxInput: {
    width: wp(90),
    marginBottom: hp(4)
  },
  label: {
    width: wp(90),
    color: "#005A7D",
    fontSize: hp(3),
    marginLeft: 7,
    marginBottom: 10,
    textAlign: "justify"
  },
  boxButtton: {
    flexDirection: "column",
    marginTop: hp(10)
  },
  buttonDelete: {
    width: wp(90),
    backgroundColor: "#E3E3E3",
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginHorizontal: "auto",
    borderWidth: 1, // Largura da borda
    borderColor: '#BFBFBF', // Cor da borda
    borderRadius: 10, // Arredondar cantos da borda
  },
  textButtonDelete: {
    color: "red",
    fontSize: hp(3),
    padding: 0,
    fontWeight: "bold",
    textAlign: "center"
  },
  icon: {
    position: "absolute",
    marginLeft: wp(5),
    top: hp(4.5)
  }
});