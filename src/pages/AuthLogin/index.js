import React, {useEffect, useState} from 'react'
import { ScrollView, StyleSheet, Text, View , TouchableOpacity, Button} from 'react-native'
import ButtonPrimary from '../../components/atoms/ButtonPrimary'
import InputGroup from '../../components/atoms/TextInputGroup'
import AuthHeaderTemplate from '../../components/moleculs/AuthHeaderTemplate'
import { useDispatch, useSelector } from 'react-redux'
import { setForm } from '../../redux'
import { service } from '../../redux'
import { emailFormat, post } from '../../services'
import { faEnvelope, faEye } from '@fortawesome/free-solid-svg-icons'
import { AsyncStorage } from 'react-native';
import axios from 'axios'



const AuthLogin = ({navigation}) => {
    const LoginReducer = useSelector((state) => state.LoginReducer) // Get data from Reducer.js
    const [responseAPI, setResponseAPI] = useState()
    const Distpatch = useDispatch()


    const sendData = (email)  => {
        var email = LoginReducer.form.email, password = LoginReducer.form.password
        // Send to API Login
        const form_params = {
            email : email,
            password : password,
        }          
        axios.post('https://kedeikoko-backend.rrrgho.com/api/login', form_params).then(result => { setResponseAPI(result.data) })
        console.log(responseAPI)
    }

    useEffect(() => {
      }, [responseAPI])

    const displayData = async () => {
        let user = await AsyncStorage.getItem('user')
        let parse = JSON.parse(user)
        alert(parse.name)
    }

    const onInputChange = (value, inputType) => {
        Distpatch(setForm(inputType,value))
    }
    return (
        <ScrollView style={style.mainScrollView}>
            <AuthHeaderTemplate title={'Sign In'} subtitle={'Sign into Your Account'}/>
            <View style={{flex:1}}>

                {/* Field */}
                <InputGroup value={LoginReducer.form.email} onChangeText={(value)=>{onInputChange(value, 'email')}} title={'Email address'} icon={faEnvelope} placeholder={'Email'} keyboardType={'email-address'}/>
                <InputGroup password={true} onChangeText={(value)=>{onInputChange(value, 'password')}} title={'Password'} icon={ faEye } style={{marginTop:20}} placeholder={'Password'}/>

                {/* Forgot Account */}
                <View style={style.forgotAccount}>
                    <Text onPress={()=>{displayData()}} style={{textDecorationLine:'underline', color:'#000'}}>Forgot Account ?</Text>
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

