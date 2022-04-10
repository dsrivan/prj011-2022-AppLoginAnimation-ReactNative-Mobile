import React from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from "react-native";

import * as Animatable from "react-native-animatable";

import { useNavigation } from "@react-navigation/native";

export default function SignIn() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Animatable.View
                style={styles.containerHeader}
                animation="fadeInLeft"
                delay={500}>
                <Animatable.Image
                    style={styles.containerHeaderLogo}
                    source={require('../../assets/logo.png')}
                    resizeMode="contain"
                />
                <Text style={styles.title}>Welcome!</Text>
                <Text style={styles.message}>Organize and track your spending </Text>
            </Animatable.View>

            <Animatable.View
                style={styles.containerForm}
                animation="fadeInUp">

                <Text style={styles.imputTitle}>E-mail</Text>
                <TextInput
                    placeholder="Type your e-mail"
                    style={styles.input}
                />

                <Text style={styles.imputTitle}>Password</Text>
                <TextInput
                    placeholder="Enter your password"
                    style={styles.input}
                />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Go</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonRegister}>
                    <Text style={styles.buttonRegisterText}>
                        Don't have an account? Register now
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonGoBack}
                    onPress={() => navigation.navigate("Welcome")}>
                    <Text style={styles.buttonGoBackText}>Go to the home page</Text>
                </TouchableOpacity>

            </Animatable.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#38A69D",
    },
    containerHeader: {
        marginTop: "5%",
        marginBottom: "8%",
        paddingStart: "5%"
    },
    containerHeaderLogo: {
        width: "50%",
        alignSelf: "center",
        marginTop: "0%",
        marginBottom: "0%"
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#FFF"
    },
    message: {
        fontSize: 18,
        color: "#FFF"
    },
    containerForm: {
        flex: 1,
        backgroundColor: "#FFF",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: "5%",
        paddingEnd: "5%"

    },
    imputTitle: {
        fontSize: 20,
        marginTop: 28
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16
    },
    button: {
        backgroundColor: "#38A69D",
        width: "100%",
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: "center",
        alignItems: "center"

    },
    buttonText: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: "bold"
    },
    buttonRegister: {
        marginTop: 14,
        alignSelf: "center"
    },
    buttonRegisterText: {
        color: "#a1a1a1"
    },
    buttonGoBack: {
        marginTop: 14,
        alignSelf: "center"
    },
    buttonGoBackText: {
        color: "#a1a1a1"
    }
});