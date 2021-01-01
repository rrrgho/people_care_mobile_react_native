import React from 'react'
import {StyleSheet, View, ScrollView, TextInput, Image, Text} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const TextInputGroup = ({style, ...props}) => {
    return (
        <View style={{width:'100%', height:undefined, paddingLeft:15, paddingRight:15, marginTop:props.mt}}>
            <View style={[styles.boxInputGroup, style]}>
                <TextInput secureTextEntry={props.password} style={[styles.TextInput]} placeholder={props.placeholder} keyboardType={props.keyboardType}></TextInput>
                <View style={styles.iconInput}>
                    <Icon name={props.icon} size={15} color={'#888'}></Icon>
                </View>
                <View style={styles.textInput}>
                    <Text style={{fontSize:18, color:'#555'}}>{props.title}</Text>
                </View>
            </View>
        </View>
    )
}

export default TextInputGroup

const styles = StyleSheet.create({
    boxInputGroup:{
        height:50,
        borderWidth:1,
        borderColor:'#999',
        borderRadius:10,
        flex:1,
        marginTop:15,
        position:'relative',
    },
    TextInput:{
        paddingLeft:15,
        paddingRight:40,

    },
    iconInput:{
        width:50,
        height:50,
        position:'absolute',
        top:-2,
        right:0,
        justifyContent:'center',
        alignItems:'center',
    },
    textInput:{
        position:'absolute',
        top:-15,
        left:20,
        backgroundColor:'#fff',
        padding:5,
    }
})