import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Platform } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Adds2 from '../../assets/images/consult.jpg'
import Adds1 from '../../assets/images/covid-warning.jpg'
import CardAdds from '../../components/moleculs/CardAdds'
import Carousel from '../../components/moleculs/Carousel/Carousel.js'
import { dummyData } from '../../components/moleculs/data/Data'
import HeaderHome from '../../components/moleculs/HeaderHome'
import NavigationReport from '../../components/moleculs/NavigationReport'
import SliderSnap from '../../components/moleculs/SliderSnap'
import { authData} from '../../services'
import Profile from '../Profile'

const HomePage = ({navigation},style, ...props) => {

    const [data,setData] = useState()
    const testing = () => {
        alert('asa')
    }

    useEffect(() => {
        axios.get('https://admin-people-care.rrrgho.com/api/adds')
        .then(response => setData(response.data.data))
        console.log(data)
    }, [])
    return (
        <View style={styles.wrapperHome}>
            <HeaderHome />
            <ScrollView contentContainerStyle={{flexGrow: 1}} style={[styles.container, style]}>
                {/* <Carousel data={dummyData}/>
                <SliderSnap/> */}
                {!data ? <Text>Loading</Text> :
                data.map(item =>(
                    <CardAdds onPress={() => {
                        alert('Adds detail is now underdeveloping !')
                    }} key={item.id} style={{marginTop:40}} image={ Adds1 } title={item.title} content={item.description} />
                ))
                }
            </ScrollView>
            <NavigationReport/>            
        </View>
    )
}

const styles = StyleSheet.create({
    wrapperHome:{
        position:'relative', 
        backgroundColor:'#fff', 
        paddingLeft:15, 
        paddingRight:15, 
        paddingTop:30, 
        flex:1, 
        height:undefined,
        ...Platform.select({
            android: {
                paddingTop:10
            },
        })
    },
    container:{
        width:'100%',
        position:'relative',
    },
})

export default HomePage