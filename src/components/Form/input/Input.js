import { useState } from 'react';

import { StyleSheet, View, TextInput, Dimensions } from "react-native"

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const {height, width} = Dimensions.get("window")

export function Input({ minValue, maxValue, placeholder, keyboardtype, Value }){
    return(
        <View style={styles.container}>
            <TextInput 
                value={Value}
                style={styles.input}
                minHeight= {minValue}
                maxLength={maxValue}
                keyboardType={keyboardtype}
                placeholder={placeholder}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: wp(90)
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
    }
})