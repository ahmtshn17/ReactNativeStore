import React from "react";
import {SafeAreaView,View,Text,Image} from 'react-native'
import styles from './Detail.style'
import useFetch from "../../hooks/useFetch";
import Loading from "../../Components/Loading";
import Error from "../../Components/Error";

export default function  Detail({route}){
    const {id} = route.params;

    const {data,loading,error} = useFetch("https://fakestoreapi.com/products/"+id)
    console.log('-------------------------------------------------------')
    console.log(data)

    if(loading){
        return  <Loading/>
      }
      if(error){
          return <Error/>
      }
    return (
        <SafeAreaView>
            <Image style={styles.Image} source={{uri: data.image}}/>
            <View style={styles.body_container}>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.desc}>{data.description}</Text>
                <Text style={styles.price}>{data.price} TL</Text>
            </View>
        </SafeAreaView>
    );
}