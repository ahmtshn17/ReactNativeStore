import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container: {
        backgroundColor:"#E3E1D9",
        margin:10,
        flexDirection:'row',
        
    },

    img : {
        width:100,
        resizeMode:'contain',
        backgroundColor:'white',
        minHeight:100

    },
    body_container: {
        flex:1,
        justifyContent:'space-between',
        padding:5
    },
    price:{
        textAlign:'right'
    }
})