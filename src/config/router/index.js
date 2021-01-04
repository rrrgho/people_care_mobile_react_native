import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { AuthLogin,HomeRegular, AuthSignup } from '../../pages'

const Stack = createStackNavigator();
const Router = () => {
    return (
        <Stack.Navigator initialRouteName="Login" >
            <Stack.Screen name="Login" component={AuthLogin} options={{headerShown: false}}></Stack.Screen>
            <Stack.Screen name="HomeRegular" component={HomeRegular}></Stack.Screen>
            <Stack.Screen name="Signup" component={AuthSignup} options={{headerShown: false}}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default Router