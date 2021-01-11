import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { StyleSheet, View } from 'react-native';
import { faArrowAltCircleLeft, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HeaderHome = () => {
    return (
        <View style={[styles.headerAuth]}>
            <TouchableOpacity style={[styles.backBox]}>
                <FontAwesomeIcon style={styles.icon} size={30} icon={faArrowAltCircleLeft}/>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.backBox]}>
                <FontAwesomeIcon style={styles.icon} size={25} icon={faUserAlt}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    headerAuth:{
        width:'100%',
        height:70,
        backgroundColor:'#fff',
        borderRadius:20,
        justifyContent:'space-between',
        flexDirection:'row',
        paddingLeft:5,
        paddingRight:5,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity:  0.1,
        shadowRadius: 3,
        elevation: 2,
        marginBottom:10,        
    },
    backBox:{
        width:50,
        height:50,
        marginTop:10,
        alignItems:'center',
        justifyContent:'center',
    },
    icon:{
        fontSize:90,
        color:'#000',
        opacity:0.8,
    }
})

export default HeaderHome