import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import NavigationReport from '../../components/moleculs/NavigationReport';
import { AuthLogin, AuthSignup, SelfReport, HomePage, Profile } from '../../pages';

const Stack = createStackNavigator();
const Router = () => {
    return (
        <Stack.Navigator initialRouteName="Signup">
            <Stack.Screen name="Login" component={AuthLogin} options={{headerShown: false}}></Stack.Screen>
            <Stack.Screen name="Signup" component={AuthSignup} options={{headerShown: false}}></Stack.Screen>
            <Stack.Screen name="HomePage" component={HomePage} options={{headerShown: false}}></Stack.Screen>
            <Stack.Screen name="SelfReport" component={SelfReport} options={{headerShown: false}}></Stack.Screen>
            <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}}></Stack.Screen>

            {/* Bottom Navigation */}
            <Stack.Screen name="NavigationReport" component={NavigationReport} options={{headerShown: false}}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default Router