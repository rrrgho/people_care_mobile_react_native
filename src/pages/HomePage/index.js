import React from 'react'
import { Text, View, StyleSheet, SafeAreaView } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import CardAdds from '../../components/moleculs/CardAdds'
import HeaderHome from '../../components/moleculs/HeaderHome'
import Adds1 from '../../assets/images/covid-warning.jpg'
import Adds2 from '../../assets/images/consult.jpg'

const HomePage = (style, ...props) => {
    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={{flexGrow: 1}} style={[styles.container, style]}>
                <HeaderHome />
                <CardAdds style={{marginTop:40}} image={ Adds1 } title={'Himbauan untuk patuhi protokol kesehatan'} content={'Awal 2021 menjadi tolak ukur penanganan pandemi covid-19 di Indonesia'} />
                <CardAdds style={{marginTop:40}} image={ Adds2 } title={'People Care Corp, Free Consult'} content={'People Care memberi pelayanan gratis untuk konsultasi gejala Covid-19'} />
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