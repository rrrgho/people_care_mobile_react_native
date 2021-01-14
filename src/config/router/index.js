import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { AuthLogin, AuthSignup, HomePage, Profile } from '../../pages';

const Stack = createStackNavigator();
const Router = () => {
    return (
        <Stack.Navigator initialRouteName="HomePage">
            <Stack.Screen name="Login" component={AuthLogin} options={{headerShown: false}}></Stack.Screen>
            <Stack.Screen name="Signup" component={AuthSignup} options={{headerShown: false}}></Stack.Screen>
            <Stack.Screen name="HomePage" component={HomePage} options={{headerShown: false}}></Stack.Screen>
            <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default Router