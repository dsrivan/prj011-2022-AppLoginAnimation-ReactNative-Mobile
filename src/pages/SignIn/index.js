import React from "react";
import {
    View,
    Text,
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
                <Text style={styles.message}>Welcome!</Text>
            </Animatable.View>

            <Animatable.View
                style={styles.containerForm}
                animation="fadeInUp">

                <Text style={styles.title}>E-mail</Text>
                <TextInput
                    placeholder="Type your e-mail"
                    style={styles.input}
                />

                <Text style={styles.title}>Password</Text>
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

                <TouchableOpacity onPress={() => navigation.navigate("Welcome")}>
                    <Text>go back</Text>
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
        marginTop: "14%",
        marginBottom: "8%",
        paddingStart: "5%"
    },
    message: {
        fontSize: 28,
        fontWeight: "bold",
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
    title: {
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
    }
});