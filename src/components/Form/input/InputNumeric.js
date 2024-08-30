import { useState } from 'react';

import { StyleSheet, View, TextInput, Dimensions } from "react-native"

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const {height, width} = Dimensions.get("window")

export function InputNumeric({ minValue, maxValue, placeholder, }){

    const [value, setValue] = useState('');

    const handleChange = (text) => {
        // Remove any character that is not a number
        const numericValue = text.replace(/[^0-9]/g, '');
        setValue(numericValue);
    };

    return(
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                minHeight= {minValue}
                maxLength={maxValue}
                value={value}
                onChangeText={handleChange}
                keyboardType='numeric'
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