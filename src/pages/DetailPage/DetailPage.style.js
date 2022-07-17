import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        width: "100%",
        height: 300,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#a52a2a",
        paddingLeft: 10,
    },
    area: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#a52a2a",
        borderBottomWidth: 2,
        paddingBottom: 10,
        borderBottomColor: "#bdbdbd",
        paddingLeft: 10,
    },
    description: {
        paddingLeft: 10,
        fontSize: 13,
        color: "black",
        paddingBottom: 10,
    },
    button: {
        backgroundColor: "red",
        width: "95%",
        borderRadius: 10,
        height: 50,
        margin: 10,
        alignSelf: "center",
        marginBottom: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    btntext: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold"
    }
})