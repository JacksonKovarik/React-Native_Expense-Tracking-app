import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Top_Circle from "../../utils/Top_Circles";
import Bottom_Circle from "../../utils/Bottom_Circles";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'; 
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import CustomInput from '../../utils/CustomInput';
import CustomButton from '../../utils/CustomButton';

import {useForm} from 'react-hook-form'
import { COLORS } from '../../utils/COLORS';


export default function Sign_In({navigation}){

  const {control, handleSubmit} = useForm();

  onSignInPress = (data) => {
    console.log(data);
    navigation.navigate('Home');
  }
  onBackPress = () => {
    navigation.navigate('Sign Up');
  }
  onForgotPasswordPress = () => {
    navigation.navigate('Forgot Password Email');
  }


  return (  
    <SafeAreaView style = {{flex:1,}}>
      <View style = {styles.body}>

        <Text style = {styles.title}>Financial</Text>
        <Text style = {styles.title}>Fellows</Text>
       
        <Text style = {{color: COLORS.black, fontSize: 30, fontFamily: 'Judson-Bold'}}>
            Sign In:
        </Text>


        <CustomInput 
          name="email"
          placeholder='Enter Email Address'
          control={control}
          rules={{
            required: 'Email is required', 
            minLength: {value: 3, message: 'Email should be minimum 3 characters long'}
          }}
        />
        <CustomInput
          name="password"
          placeholder='Enter Password'
          control={control}
          rules={{
            required: 'Password is required', 
            minLength: {value: 3, message: 'Password should be minimum 3 characters long'}
          }}
          secureTextEntry
        />
        


        <TouchableOpacity
            onPress={onForgotPasswordPress}
          >
            <Text style = {{fontSize: 13, color: '#00f', fontFamily: 'Judson-Regular', marginTop: 15}}>
              Forgot Password?
            </Text>
        </TouchableOpacity>

        <CustomButton
          onPress={handleSubmit(onSignInPress)}
          value = 'Sign In'
          type='PRIMARY'
        />
      </View>


      <View style = {{position: 'absolute'}}><Top_Circle/></View>
      <View><Bottom_Circle/></View>

      <View style = {styles.back}>
        <TouchableOpacity onPress={onBackPress}>
          <FontAwesomeIcon icon={faArrowLeft} size={30}/>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 35,
    fontFamily: 'Judson-Bold',
    color: COLORS.primary,
    marginTop: -25,
    marginBottom: 15,
  },
  back: {
      position: 'absolute', 
      height: 5, 
      width: 30, 
      top: 80,
      left: 50,
  }
});
