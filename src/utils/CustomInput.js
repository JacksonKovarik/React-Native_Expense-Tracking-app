import React from 'react';
import {
    StyleSheet,
    TextInput,
    View,
    Text,
  } from 'react-native';
  import { Controller } from 'react-hook-form';

  const CustomInput = ({ control, name, rules = {}, placeholder, secureTextEntry}) => {
    return (

        <Controller 
          control={control}
          name={name}
          rules={rules}
          render={({field: {value, onChange, onBlur}, fieldState: {error}}) => 
            <>
              <View style = {styles.container}>
                <TextInput 
                  value={value} 
                  onChangeText={onChange} 
                  onBlur={onBlur} 
                  placeholder={placeholder}
                  placeholderTextColor={'#619B93'}
                  style = {[styles.input, {borderColor: error ? 'red' : '#eee'}]}
                  secureTextEntry={secureTextEntry}
                />
              </View>
              {error && (
                <Text style = {{color: 'red', alignSelf: 'stretch', marginLeft: 40}}>{error.message || 'Error'}</Text>
              )}
            </>
          }
        />
    )
  }

  const styles = StyleSheet.create ({
    container: {
      backgroundColor: '#FFF',
      width: '100%',
      alignItems: 'center',
      paddingHorizontal: 10,
      
    },
    input: {
        width: '85%',
        height: 45,
        //textAlign: 'center',
        backgroundColor: '#eee',
        margin: 10,
        borderWidth: 1,
        //borderRadius: 30,
        paddingLeft: 10,
      },
  })

  export default CustomInput;