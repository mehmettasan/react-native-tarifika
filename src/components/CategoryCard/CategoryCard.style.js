import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        width:"95%",
        backgroundColor: "white",
        flexDirection: "row",
        margin: 10,
        alignItems: "center",
        alignSelf: "center",
        borderTopLeftRadius: 50,
        borderBottomLeftRadius:50,
        overflow:"hidden",
    },
    image: { 
        width: 100, 
        height: 100,
        resizeMode:"contain" 
    },
    title: {
        marginLeft:20,
        fontSize:25,
        fontWeight:"bold"
    }
})