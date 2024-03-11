import { StyleSheet,Dimensions } from "react-native";

export default StyleSheet.create({
    Image:{
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height / 3,
        resizeMode:'contain',
        backgroundColor:'white'
    },
    body_container:{
        padding:10
    },
    title:{
        fontWeight:'bold',
        marginVertical:10,
        fontSize:17
    },
    desc:{
        marginVertical:5,

    },
    price:{
        marginVertical:5,
        textAlign:'right',
        fontStyle:'italic'

    }
})