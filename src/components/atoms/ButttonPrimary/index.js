import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'


const ButtonPrimary = (props) => {
    return (
        <View style={style.buttonPrimaryBox}>
            <TouchableOpacity style={style.buttonPrimaryBtn}>
                <Text style={style.btnText}>{props.title}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ButtonPrimary

const style = StyleSheet.create({
    buttonPrimaryBox:{
        width:'100%',
        height:50,
        paddingLeft:35,
        paddingRight:35,
        marginTop:30,
    },
    buttonPrimaryBtn:{
        width:'100%',
        flex:1,
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#8DE570',
    },
    btnText:{
        fontSize:30,
        color:'#fff',
        fontWeight:'bold',
        textShadowColor:'#888',
    }
})