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

export function CadastroSenha({ route, navigation }) {

  const { dataFromA } = route.params;

  const handleNavigate = () => {
    navigation.navigate('menuPrincipal', { dataFromB: dataFromA })
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#005A7D"}/>
      <TouchableOpacity style={styles.icon} onPress={ () => navigation.navigate('cadastroEmail') }>
        <AntDesign name="arrowleft" size={30} color="black" />
      </TouchableOpacity>
        <View style={styles.main}>
          <View style={styles.contentTitle}>
            <Text style={styles.title}>Defina uma senha</Text>
          </View>

          <View style={styles.boxInput}>
            <View style={styles.contentInput}>
            <Text style={styles.label}>Senha</Text>
            <InputNumeric
                minValue= {4}
                maxValue={8}
                placeholder={"*******"}
              />
            </View>
            
            <View style={styles.contentInput}>
              <Text style={styles.label}>Confirmar Senha</Text>
              <InputNumeric
                minValue= {4}
                maxValue={8}
                placeholder={"*******"}
              />
            </View>
          </View>

          <View style={styles.button}>
              <Button TextButton={'Avançar'} onpress={handleNavigate}/>
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
    alignItems: "flex-start",
    marginTop: hp(5)
  },
  title: {
    color: "#003B52",
    fontSize: hp(4),
    fontWeight: "bold",
    textAlign: "justify"
  },
  boxInput: {
    marginTop: hp(5),
    marginBottom: hp(30)
  },
  contentInput: {
    width: wp(90),
    marginBottom: hp(4)
  },
  label: {
    width: wp(90),
    color: "#005A7D",
    fontSize: hp(2.9),
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