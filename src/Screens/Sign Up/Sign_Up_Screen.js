import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Top_Circle from "../../utils/Top_Circles";
import Bottom_Circle from "../../utils/Bottom_Circles";
import CustomButton from '../../utils/CustomButton';
import CustomInput from '../../utils/CustomInput';

import {useForm} from 'react-hook-form'
import { COLORS } from '../../utils/COLORS';

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default function Sign_Up({navigation}){
  
  const {control, handleSubmit, watch,} = useForm();
  const pwd = watch('password');


  onSignUpPressed = (data) => {
    console.log(data)
    navigation.navigate('Confirm Email')
  }
  onSignInPressed = () => {
    navigation.navigate('Sign In');
  }

  return (  
    <SafeAreaView style = {{flex:1,}}>
      <View style = {styles.body}>

        <Text style = {styles.title}>Welcome</Text>
       
        <CustomInput 
          name = "name"
          placeholder='Enter First and Last Name'
          control={control}
          rules={{
            required: 'Name is required', 
            minLength: {value: 2, message: 'Name should be minimum 2 characters long'},
            maxLength: {value: 24, message: 'Name can be maximum 24 characters long'}
          }}
        />
        <CustomInput 
          name = "email"
          placeholder='Enter Email Address'
          control={control}
          rules={{
            required: 'Email Address is required', 
            pattern: {value: EMAIL_REGEX, message: 'Email is invalid'},
            maxLength: {value: 24, message: 'Email can be maximum 24 characters long'}
          }}
        />
        <CustomInput 
          name = "password"
          placeholder='Enter Password'
          control={control}
          rules={{
            required: 'Password is required', 
            minLength: {value: 8, message: 'Password should be minimum 8 characters long'},
            maxLength: {value: 24, message: 'Password can be maximum 24 characters long'}
          }}
          secureTextEntry
        />
        <CustomInput 
          name = "confirm password"
          placeholder='Confirm-Password'
          control={control}
          rules={{
            required: 'Confirm Password is required', 
            minLength: {value: 8, message: 'Password should be minimum 8 characters long'},
            maxLength: {value: 24, message: 'Password can be maximum 24 characters long'},
            validate: value => 
              value == pwd || 'Passwords do not match', 
          }}
          secureTextEntry
        />


        <CustomButton
          value = 'Welcome'
          onPress = {handleSubmit(onSignUpPressed)}
          type='PRIMARY'
        /> 

        <View style = {styles.horizontal}>
          <Text style = {styles.text}>
            Already have an acoount?
          </Text>
          <TouchableOpacity
            onPress={onSignInPressed}
            style = {{paddingLeft: 110}}
          >
            <Text style = {{fontSize: 13, color: '#00f'}}>
              Sign in
            </Text>
          </TouchableOpacity>
        </View>

      </View>
      <View style = {{position: 'absolute'}}><Top_Circle/></View>
      <View><Bottom_Circle/></View>
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
    color: COLORS.black,
    marginTop: -25,
    marginBottom: 15,
  },
  text: {
    fontSize: 13,
    color: COLORS.black,
  },

  horizontal: {
    flexDirection: 'row',
  
},
});
