import React, {Component, useEffect, useState} from 'react'
import { ScrollView, StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import ButtonPrimary from '../../components/atoms/ButtonPrimary'
import InputGroup from '../../components/atoms/TextInputGroup'
import AuthHeaderTemplate from '../../components/moleculs/AuthHeaderTemplate'
import DatePicker from 'react-native-datepicker';






const AuthSignup = ({navigation}) => {
    const [isSelected,setSelection] = useState(false);
    return (
        <ScrollView style={style.mainScrollView}>
            <AuthHeaderTemplate title={'Sign Up'} subtitle={'Sign into Your Account'}/>
            <View style={{flex:1}}>

                {/* Field */}
                <InputGroup title={'Full Name'} placeholder={'Full Name'} keyboardType={'default'}/>
                <InputGroup title={'NIK'} icon={'id-card'} placeholder={'NIK'} keyboardType={'numeric'}/>
                <InputGroup title={'Birth Date'} icon={'calendar'} placeholder={'Email'} keyboardType={''}/>
                {/* <DatePicker /> */}
                
                
                
                <InputGroup title={'Email Address'} icon={'envelope'} placeholder={'Email'} keyboardType={'email-address'}/>
                <InputGroup password={true} title={'Password'} icon={'eye'} style={{marginTop:30}} placeholder={'Password'}/>
                <InputGroup title={'Phone Number'} icon={'mobile'} placeholder={'Phone Number'} keyboardType={'numeric'}/>
                <InputGroup title={'Pronvince'} icon={'down'} placeholder={'Email'} keyboardType={'email-address'}/>
                <InputGroup title={'City'} icon={'long-arrow-down'} placeholder={'Email'} keyboardType={'email-address'}/>
                
                <View style={style.boxcontainer}>
                <CheckBox
                    style={style.checkbox}
                    value={isSelected}
                    onValueChange={setSelection}
                />
                <Text style={style.textcheck}>I agre all statement in Terms of Services</Text>
                </View>

                {/* Button Sign Up */}
                <ButtonPrimary  title={'Sign Up'} onPress={() => {navigation.navigate('HomeRegular')}}/>


                {/* Already have an Account */}
                <View style={style.footer}>
                    <Text>Already have an account?</Text>
                    <Text  onPress={()=>{navigation.navigate('Login')}} style={{color:'blue', marginLeft:2}}>Log in</Text>
                </View>
            </View>
        </ScrollView>
    )
}




export default AuthSignup


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
    boxcontainer:{
        flexDirection: "row",
        marginBottom: 20,
    },
    checkbox:{
        marginLeft: 10,
        marginRight: 10,
        marginTop: 25,
    },
    textcheck:{
        marginTop: 30,
        fontSize: 15,
    },

})

