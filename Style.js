import { StyleSheet, Platform } from "react-native";
export default StyleSheet.create({
    headerContainer: {
        paddingBottom: 10,
        alignSelf: "stretch"
    },
    headerText: {
        color: "white",
        fontSize: 20
    },

    contentsContainer: {
        flexDirection: "row",
        alignItems: "stretch"
    },

    inputContainer: {
        flex: 2.5,
        justifyContent: "space-between"
    },

    resultText: {
        textAlign: 'center',
        ...Platform.select({
            android: {
                paddingBottom: 12
            }
        })

    },
    textStyle: {
        color: "black",
        fontSize: 20,
        ...Platform.select({
            ios: {
                height: 40
            }
        })
    },

    iconStyle: {
        width: 30,
        height: 30
    },

    iconContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },

    pickerStyle: {
        ...Platform.select({
            ios: {
                height: 120
            }
        })
    },

    textInputContainerIOS: {
        ...Platform.select({
            ios: {
                marginTop: 10,
                borderWidth: 1,
                borderColor: 'black'
            }
        })

    }

});