import React, {useEffect, useState} from 'react'
import { ScrollView, StyleSheet, Text, View , TouchableOpacity, Button} from 'react-native'
import ButtonPrimary from '../../components/atoms/ButtonPrimary'
import InputGroup from '../../components/atoms/TextInputGroup'
import AuthHeaderTemplate from '../../components/moleculs/AuthHeaderTemplate'
import { useDispatch, useSelector } from 'react-redux'



const AuthLogin = ({navigation}) => {
    const LoginReducer = useSelector((state) => state.LoginReducer) // Get data from Reducer.js
    const Distpatch = useDispatch()

    const sendData = () => {
        console.log('data yang dikirim : ', LoginReducer.form)
    }

    const onInputChange = (value, input) => {
        Distpatch({
            type: 'SET_FORM',
            inputType: input,
            inputValue: value
        })
    }
    return (
        <ScrollView style={style.mainScrollView}>
            <AuthHeaderTemplate title={'Sign In'} subtitle={'Sign into Your Account '+LoginReducer.name}/>
            <View style={{flex:1}}>

                {/* Field */}
                <InputGroup value={LoginReducer.form.email} onChangeText={(value)=>{onInputChange(value, 'email')}} title={'Email address'} icon={'envelope'} placeholder={'Email'} keyboardType={'email-address'}/>
                <InputGroup password={true} title={'Password'} icon={'eye'} style={{marginTop:30}} placeholder={'Password'}/>

                {/* Forgot Account */}
                <View style={style.forgotAccount}>
                    <Text style={{textDecorationLine:'underline', color:'#000'}}>Forgot Account ?</Text>
                </View>

                {/* Button Sign In */}
                <ButtonPrimary  title={'Login'} onPress={() => {sendData()}}/>


                {/* Create Account Navigation */}
                <View style={style.footer}>
                    <Text>Don't have account?</Text>
                    <Text onPress={()=>{navigation.navigate('Signup')}} style={{color:'blue', marginLeft:2}}>Create</Text>
                </View>
            </View>
        </ScrollView>
    )
}



export default AuthLogin

const style = StyleSheet.create({
    mainScrollView:{
        width:'100%',
        backgroundColor:'#fff',
    },
    forgotAccount:{
        width:'100%',
        marginTop:30,
        justifyContent:'center',
        alignItems:'center',
    },
    footer:{
        flexDirection:'row',
        alignContent:'center',
        justifyContent:'center',
        marginTop:200,
        flex:1,
    },

})

