import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Adds2 from '../../assets/images/consult.jpg'
import Adds1 from '../../assets/images/covid-warning.jpg'
import CardAdds from '../../components/moleculs/CardAdds'
import HeaderHome from '../../components/moleculs/HeaderHome'
import NavigationReport from '../../components/moleculs/NavigationReport'
import { authData} from '../../services'
import Profile from '../Profile'

const HomePage = ({navigation},style, ...props) => {
    const displayData = async () => {
        let response = JSON.parse(await authData())
        console.log(response.data.uid)        
    }
    return (
        <View style={{position:'relative', backgroundColor:'#fff', paddingLeft:15, paddingRight:15, paddingTop:30, flex:1, height:undefined}}>
            <ScrollView contentContainerStyle={{flexGrow: 1}} style={[styles.container, style]}>
                <Text onPress={()=>{displayData()}}>APALAH</Text>
                <HeaderHome toProfile={()=>{navigation.navigate(Profile)}} />
                <CardAdds style={{marginTop:40}} image={ Adds1 } title={'Himbauan untuk patuhi protokol kesehatan'} content={'Awal 2021 menjadi tolak ukur penanganan pandemi covid-19 di Indonesia'} />
                <CardAdds style={{marginTop:40}} image={ Adds2 } title={'People Care Corp, Free Consult'} content={'People Care memberi pelayanan gratis untuk konsultasi gejala Covid-19'} />
            </ScrollView>
            <NavigationReport />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        paddingTop:10,
    },
})

export default HomePage