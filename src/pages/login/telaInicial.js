import { 
  StatusBar, 
  StyleSheet,
  Text, 
  View, 
  Image, 
  TouchableOpacity, 
  Dimensions 
} from "react-native";

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const {height, width} = Dimensions.get("window")

export function PageInitial({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#005A7D"}/>
        <View style={styles.main}>
            <Image style={styles.icone} source={require('../../assets/img/icon_principal.png')} />

            <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('cadastroNome') }>
                <Text style={styles.textButton}>Começar</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: hp(100),
    justifyContent: "center",
    paddingHorizontal: wp(5),
    minWidth: "100%",
    marginHorizontal: "auto", 
    marginVertical: "auto",
    backgroundColor: "#fff"
  },
  main: {
    width: wp(90)
  },
  icone: {
    width: wp(30),
    height: hp(30),
    marginTop: hp(15),
    marginHorizontal: "auto",
  },
  button: {
    color: "#000",
    backgroundColor: "#005A7D",
    paddingVertical: hp(2),
    paddingHorizontal: wp(2),
    borderRadius: 10,
    width: wp(50),
    marginTop: hp(25),
    marginHorizontal: "auto"
  },
  textButton: {
    color: "#fff",
    fontSize: hp(4),
    fontWeight: "bold",
    textAlign: "center",
  }
});
