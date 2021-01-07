import { faCode } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-paper';


const TextInputGroup = ({style, ...props}) => {
    return (
        <View style={{width:'100%', height:undefined, paddingLeft:15, paddingRight:15, marginTop:props.mt}}>
            <TextInput label={props.title} mode="outlined"
            theme={{ colors: { placeholder: 'grey', background: '#fff', text: 'grey', primary: '#5d5d5d' }, roundness:20}}
            style={[style]}
            />
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
    iconInput:{
        width:50,
        height:50,
        position:'absolute',
        top:-2,
        right:0,
        justifyContent:'center',
        alignItems:'center',
    },
})