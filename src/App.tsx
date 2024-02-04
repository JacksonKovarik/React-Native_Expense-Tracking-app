import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Get_Started from './Screens/Get_Started_Screen';
import Sign_Up from './Screens/Sign Up/Sign_Up_Screen';
import Sign_In from './Screens/Sign In/Sign_In_Screen';
import NewPassword from './Screens/Sign In/NewPassword_Screen';
import ConfirmEmail from './Screens/Sign Up/ConfirmEmail_Screen';
import ForgotPassEmail from './Screens/Sign In/ForgotPassEmail_Screen';


const Stack = createStackNavigator();

function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Get Started'
        screenOptions={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#0080ff'
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: 'bold'
          }
        }}
      >

        <Stack.Screen 
          name="Get Started"
          component={Get_Started}
          options={{
            headerShown: false,
          }}
        />
        

        <Stack.Screen 
          name="Sign Up"
          component={Sign_Up}
          options = {{
            headerShown: false,
          }}
        />

        <Stack.Screen 
          name="Sign In"
          component={Sign_In}
          options = {{
            headerShown: false,
          }}
        />

        <Stack.Screen 
          name="Confirm Email"
          component={ConfirmEmail}
          options = {{
            headerShown: false,
          }}
        />  

        <Stack.Screen 
          name="Forgot Password Email"
          component={ForgotPassEmail}
          options = {{
            headerShown: false,
          }}
        /> 

        <Stack.Screen 
          name="Forgot Password"
          component={NewPassword}
          options = {{
            headerShown: false,
          }}
        />  

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;