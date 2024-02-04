import React from 'react';
import {
  Platform,
  Text,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Get_Started from './Screens/Get_Started_Screen';
import Sign_Up from './Screens/Sign Up/Sign_Up_Screen';
import Sign_In from './Screens/Sign In/Sign_In_Screen';
import NewPassword from './Screens/Sign In/NewPassword_Screen';
import ConfirmEmail from './Screens/Sign Up/ConfirmEmail_Screen';
import ForgotPassEmail from './Screens/Sign In/ForgotPassEmail_Screen';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'; 
import { faHome, faList, faCalendarDays, faUser, faPlus } from '@fortawesome/free-solid-svg-icons'; 

import Dashboard from "./Screens/Tabs/Dashboard"
import Years from "./Screens/Tabs/Years";
import Account from "./Screens/Tabs/Account"
import Categories from "./Screens/Tabs/Categories"
import Transaction from "./Screens/Tabs/Transaction"


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS } from './utils/COLORS';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Home () {
  return (
    
      <Tab.Navigator 
        initialRouteName="Dashboard"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            position: 'absolute',
            bottom: 20,
            right: 16,
            left: 16,
            elevation: 0,
            height: 60,
            backgroundColor: COLORS.lightSecondary,
            borderRadius: 20,
          }
        }}
        
      >
          <Tab.Screen 
            name="Dashboard" 
            component={Dashboard}
            
            options={{
              tabBarIcon: ({ focused }) => (
                // <FontAwesomeIcon icon={faHome} size={30} color = {focused ? COLORS.primary : COLORS.black}/>
                <View style = {{alignItems: 'center', justifyContent: 'center', }}>
                  <FontAwesomeIcon icon={faHome} size={30} color = {focused ? COLORS.primary : COLORS.black}/>
                  <Text style = {focused ? {fontSize: 12,color: COLORS.primary} : {fontSize: 12, color: COLORS.black} }>Dashboard</Text>
                </View>
              ),
            }}
          />
          
          <Tab.Screen 
            name="Years" 
            component={Years}
            
            options={{
              tabBarIcon: ({ focused }) => (
                <View style = {{alignItems: 'center', justifyContent: 'center', }}>
                  <FontAwesomeIcon icon={faCalendarDays} size={30} color = {focused ? COLORS.primary : COLORS.black}/>
                  <Text style = {focused ? {fontSize: 12,color: COLORS.primary} : {fontSize: 12, color: COLORS.black} }>Years</Text>
                </View>
              ),
            }}
          />

          <Tab.Screen 
            name="Transaction" 
            component={Transaction}
          
            options={{
              tabBarIcon:  ({ focused }) => (
                <View
                style = {{
                  top: Platform.OS == "ios" ? -10 : -20,
                  width: Platform.OS == "ios" ? 55 : 65,
                  height: Platform.OS == "ios" ? 55 : 65,
                  borderRadius: Platform.OS == "ios" ? 55/2 : 65/2,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#0094FF'
                }}
                >
                  <FontAwesomeIcon icon={faPlus} size={30} color = {focused ? COLORS.primary : COLORS.black}/>
                  
                </View>
              )
            }}
          />

          <Tab.Screen 
            name="Categories" 
            component={Categories}
            
            options={{
              tabBarIcon: ({ focused }) => (
                <View style = {{alignItems: 'center', justifyContent: 'center', }}>
                  <FontAwesomeIcon icon={faList} size={30} color = {focused ? COLORS.primary : COLORS.black}/>
                  <Text style = {focused ? {fontSize: 12,color: COLORS.primary} : {fontSize: 12, color: COLORS.black} }>Categories</Text>
                </View>
              ),
            }}
          />

          <Tab.Screen 
            name="Account" 
            component={Account}
            
            options={{
              tabBarIcon: ({ focused }) => (
                // <FontAwesomeIcon icon={faHome} size={30} color = {focused ? COLORS.primary : COLORS.black}/>
                <View style = {{alignItems: 'center', justifyContent: 'center', }}>
                  <FontAwesomeIcon icon={faUser} size={30} color = {focused ? COLORS.primary : COLORS.black}/>
                  <Text style = {focused ? {fontSize: 12,color: COLORS.primary} : {fontSize: 12, color: COLORS.black} }>Dashboard</Text>
                </View>
              ),
            }}
          />
      </Tab.Navigator>
      
  )
}

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

        <Stack.Screen 
          name="Home"
          component={Home}
          options = {{
            headerShown: false,
          }}
        />  

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;