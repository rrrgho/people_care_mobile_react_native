import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import LinearGradient from 'react-native-linear-gradient';
import { Text, StyleSheet, View } from 'react-native';
import { faPeopleCarry, faUserMd, faUserShield } from '@fortawesome/free-solid-svg-icons';
import theme1 from '../../atoms/ColorPrimary';
import { TouchableOpacity } from 'react-native-gesture-handler';

const NavigationReport = (style, ...props) => {
    return  (
        <View style={[styles.container, style]}>
            <TouchableOpacity style={styles.boxNav}>
                <LinearGradient colors={[theme1.primaryGradient1, theme1.primaryGradient2]} style={styles.iconBox}>
                    <FontAwesomeIcon style={{color:'#fff'}} size={25} icon={ faUserShield }/>
                </LinearGradient>
                <Text style={styles.iconText}>Self</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.boxNav}>
                <LinearGradient colors={[theme1.primaryGradient1, theme1.primaryGradient2]} style={styles.iconBox}>
                    <FontAwesomeIcon style={{color:'#fff'}} size={25} icon={ faPeopleCarry }/>
                </LinearGradient>
                <Text style={styles.iconText}>Others</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.boxNav}>
                <LinearGradient colors={[theme1.primaryGradient1, theme1.primaryGradient2]} style={styles.iconBox}>
                    <FontAwesomeIcon style={{color:'#fff'}} size={25} icon={ faUserMd }/>
                </LinearGradient>
                <Text style={styles.iconText}>Consult</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        marginLeft:15,
        height:100,
        backgroundColor:'#fff',
        position:'absolute',
        borderRadius:100,
        left:0,
        bottom:30,
        borderWidth:1,
        borderColor:'#ddd',
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 4 },
        shadowOpacity:  0.1,
        shadowRadius: 3,
        elevation: 2,
        flexDirection:'row',
        justifyContent:'space-around',
    },
    boxNav:{
        width:100,
        height:60,
        backgroundColor:'#fff',
        marginTop:20,
        borderRadius:100,
        alignItems:'center',
        justifyContent:'center',
    },
    iconBox:{
        width:50,
        height:50,
        borderRadius:100,
        alignItems:'center',
        justifyContent:'center'
    },
    iconText:{
        marginTop:6,
        textTransform: 'uppercase',
        fontSize:12,
        textAlign:'center'
    }
})

export default NavigationReport