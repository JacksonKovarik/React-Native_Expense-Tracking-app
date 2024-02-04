import React from "react";
import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";

import Top_Circle from "../utils/Top_Circles";
import Bottom_Circle from "../utils/Bottom_Circles";
import {COLORS} from "../utils/COLORS";
import CustomButton from "../utils/CustomButton";
import {useForm} from 'react-hook-form'

export default function Get_Started ({ navigation }) {
    
    const {handleSubmit} = useForm();
    const onPressFunction = () => {
        navigation.navigate('Sign Up');
    }
    
    return(
        <SafeAreaView style = {{flex: 1, backgroundColor: '#ffffff'}}>

            <View style = {styles.body}>

                <Image
                    style = {styles.image}  
                    source={require('../../assets/GetStarted.png')}
                />

                <Text style = {styles.title}>Financial</Text>
                <Text style = {styles.title}>Fellows</Text>

                <CustomButton
                    onPress={handleSubmit(onPressFunction)}
                    value = 'Welcome'
                    type='PRIMARY'
                />

            </View>

            <View style = {{position: 'absolute'}}><Top_Circle/></View>
            <View><Bottom_Circle/></View>
            
        </SafeAreaView>
            
    
    )

}

const styles = StyleSheet.create ({
    body: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.white,
    },
    image: {
        width: '80%',
        height: '21%',
        marginTop: -30,
        marginBottom: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 35,
        color: COLORS.primary,
        fontFamily: 'Judson-Bold',
        alignItems: 'center',
    },
    
})