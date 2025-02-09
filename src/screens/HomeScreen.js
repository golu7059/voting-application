import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Button, Appbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const HomeScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* Top App Bar with Notifications and Profile */}
            <Appbar.Header>
                <Appbar.Content title="Voting App" />
                <Appbar.Action icon="bell" onPress={() => alert("Notifications")} />
                <Appbar.Action icon="account-circle" onPress={() => alert("Profile")} />
            </Appbar.Header>

            {/* Voting Logo */}
            <Image source={require("../assets/voting_logo.png")} style={styles.logo} />

            {/* Main Title */}
            <Text style={styles.title}>Secure Online Voting</Text>

            {/* QR Code Scanner Section */}
            <TouchableOpacity
                style={styles.qrScanner}
                onPress={() => navigation.navigate("QRScannerScreen")}
            >
                <Icon name="qrcode-scan" size={40} color="#fff" />
                <Text style={styles.qrText}>Scan QR Code</Text>
            </TouchableOpacity>

            {/* Voting Options */}
            <View style={styles.buttonContainer}>
                <Button
                    mode="contained"
                    onPress={() => navigation.navigate("SecureVotingScreen")}
                    style={styles.button}
                >
                    Secure Voting
                </Button>
                <Button
                    mode="contained"
                    onPress={() => navigation.navigate("TestScreen")}
                    style={styles.button}
                >
                    Test Voting
                </Button>
            </View>

            {/* Join/Create Voting & Verification Section */}
            <View style={styles.verificationContainer}>
                <Button
                    mode="outlined"
                    icon="account-plus"
                    onPress={() => navigation.navigate("JoinVotingScreen")}
                >
                    Join a Voting Session
                </Button>
                <Button
                    mode="outlined"
                    icon="plus-circle"
                    onPress={() => navigation.navigate("CreateVotingScreen")}
                >
                    Create a Voting Session
                </Button>
                <Button
                    mode="contained"
                    icon="check-circle"
                    onPress={() => navigation.navigate("VerificationScreen")}
                >
                    Verify Your Identity
                </Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        alignItems: "center",
    },
    logo: {
        width: 120,
        height: 120,
        marginTop: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginVertical: 10,
    },
    qrScanner: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#007AFF",
        padding: 10,
        borderRadius: 10,
        marginVertical: 15,
    },
    qrText: {
        color: "#fff",
        fontSize: 16,
        marginLeft: 10,
    },
    buttonContainer: {
        width: "80%",
        marginVertical: 10,
    },
    button: {
        marginVertical: 5,
    },
    verificationContainer: {
        width: "80%",
        marginTop: 20,
    },
});

export default HomeScreen;
