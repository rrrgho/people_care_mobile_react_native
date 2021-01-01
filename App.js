/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import 'react-native-gesture-handler'
import Router from './src/config/router'




const App: () => React$Node = () => {
    return (
        <NavigationContainer>
            <Router/>
        </NavigationContainer>
    );
};



export default App;
