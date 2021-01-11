import React from 'react'
import { Text, View, StyleSheet, SafeAreaView } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import CardAdds from '../../components/moleculs/CardAdds'
import HeaderHome from '../../components/moleculs/HeaderHome'

const HomePage = (style, ...props) => {
    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={{flexGrow: 1}} style={[styles.container, style]}>
                <HeaderHome />
                <CardAdds style={{marginTop:40}}/>
                <CardAdds style={{marginTop:40}}/>
                <CardAdds style={{marginTop:40}}/>
                <CardAdds style={{marginTop:40}}/>
                <CardAdds style={{marginTop:40}}/>
                <CardAdds style={{marginTop:40}}/>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        paddingLeft:15,
        paddingRight:15,
        paddingTop:10,
    },
})

export default HomePage