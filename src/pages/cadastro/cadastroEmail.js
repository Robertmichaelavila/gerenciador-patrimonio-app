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

import { Input } from "../../components/Form/input/Input";
import { Button } from "../../components/Form/button/Button"

import { AntDesign } from '@expo/vector-icons';

export function CadastroEmail({ route, navigation }) {

  const { input } = route.params;

  const handleNavigate = () => {
    navigation.navigate('cadastroEmail', { message: input })
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#005A7D"}/>
      <TouchableOpacity style={styles.icon} onPress={ () => navigation.navigate('cadastroNome') }>
        <AntDesign name="arrowleft" size={30} color="black" />
      </TouchableOpacity>
        <View style={styles.main}>
            <View style={styles.contentTitle}>
              <Text style={styles.title}>Qual o seu email?</Text>
              <Text style={styles.subtitle}>Precisamos do seu e-mail para validação e segurança.</Text>
            </View>

            <View style={styles.contentInput}>
              <Input
                minValue= {30}
                maxValue={50}
                placeholder={"email@gmail.com"}
                keyboardtype={'email-address'}
              />
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
  subtitle: {
    color: "#005A7D",
    fontSize: hp(3),
    marginTop: 10,
    textAlign: "justify"
  },
  contentInput: {
    width: wp(90),
    marginTop: hp(10),
    marginBottom: hp(40)
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