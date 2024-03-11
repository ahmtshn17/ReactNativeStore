import React from "react";
import { View,Text,Image,TouchableWithoutFeedback } from "react-native";
import styles from "./Card.style"

function ProductCard({product, onSelect}) {
    return(
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}> 
                
                <Image source={{uri: product.image}} style={styles.img}/>
                <View style={styles.body_container}>
                    <Text>
                        {product.title}
                    </Text>

                    <Text style={styles.price}>
                        {product.price}
                    </Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}


export default ProductCard