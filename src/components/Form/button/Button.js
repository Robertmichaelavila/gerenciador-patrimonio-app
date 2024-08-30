import { StyleSheet, View, TouchableOpacity, Text, Dimensions } from 'react-native'

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const {height, width} = Dimensions.get("window")

export function Button({ TextButton, onpress }){
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={onpress}>
              <Text style={styles.textButton}>{TextButton}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: wp(90),
        alignItems: "center",
        marginHorizontal: "auto"
    },
    button: {
        width: wp(90),
        backgroundColor: "#005A7D",
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderRadius: 10,
        marginBottom: 10,
        marginHorizontal: "auto",
        borderColor: "#BFBFBF",
        borderWidth: 1, // Largura da borda
        borderRadius: 10, // Arredondar cantos da borda
    },
    textButton: {
        color: "#FFF",
        fontSize: hp(3),
        padding: 0,
        fontWeight: "bold",
        textAlign: "center",
    }
})