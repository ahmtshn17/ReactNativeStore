import React from "react";
import {SafeAreaView,View,Text,FlatList,ActivityIndicator} from 'react-native'
import ProductCard from "../../Components/ProductCard/Card";
import useFetch from "../../hooks/useFetch";
import Loading from "../../Components/Loading";
import Error from "../../Components/Error";

export default function Product ({navigation}){

const {data,loading,error} = useFetch("https://fakestoreapi.com/products")

const renderProduct = ({item}) => (<ProductCard product={item} onSelect={()=>handleProductSelect(item.id)}/>);


if(loading){
  return  <Loading/>
}
if(error){
    return <Error/>
}

const handleProductSelect= id => {
navigation.navigate('Detail',{id});  

}

    return (
        <SafeAreaView>
            <FlatList data={data} renderItem={renderProduct}/>
        </SafeAreaView>
    );
}