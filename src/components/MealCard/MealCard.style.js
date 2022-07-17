import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container:{
        width:"95%",
        height:200,
        margin:10,
        backgroundColor:"white",
        borderRadius:15,
        overflow:"hidden",
        alignSelf:"center",
        flex:1
    },
    title:{
        fontSize:25,
        padding:20,
        color:"white",
        fontWeight:"bold",
        textAlign:"right",
        lineHeight:20,
        backgroundColor:"#00000090"
    },
    image:{
        flex:1,
        justifyContent:"flex-end"
    },
})