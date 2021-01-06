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
import { Provider } from 'react-redux'
import store from './src/redux'




const App: () => React$Node = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Router/>
            </NavigationContainer>
        </Provider>
    );
};



export default App;
