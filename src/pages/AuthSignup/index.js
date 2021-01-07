import CheckBox from '@react-native-community/checkbox';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import ButtonPrimary from '../../components/atoms/ButtonPrimary';
import InputGroup from '../../components/atoms/TextInputGroup';
import AuthHeaderTemplate from '../../components/moleculs/AuthHeaderTemplate';






const AuthSignup = ({navigation}) => {
    const [isSelected,setSelection] = useState(false);
    return (
        <ScrollView style={styles.mainScrollView}>
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
                
                <View style={styles.boxcontainer}>
                <CheckBox
                    style={styles.checkbox}
                    value={isSelected}
                    onValueChange={setSelection}
                />
                <Text style={styles.textcheck}>I agre all statement in Terms of Services</Text>
                </View>

                {/* Button Sign Up */}
                <ButtonPrimary style={{marginTop:0}} title={'Sign Up'} onPress={() => {navigation.navigate('HomeRegular')}}/>


                {/* Already have an Account */}
                <View style={[styles.footer, {marginTop:20, marginBottom:20}]}>
                    <Text>Already have an account?</Text>
                    <Text  onPress={()=>{navigation.navigate('Login')}} style={{color:'blue', marginLeft:2}}>Log in</Text>
                </View>
            </View>
        </ScrollView>
    )
}




export default AuthSignup


const styles = StyleSheet.create({
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

