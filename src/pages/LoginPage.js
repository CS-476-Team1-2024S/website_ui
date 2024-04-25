import React, { useState } from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput } from 'react-native';

// Assuming Login is a custom hook or function for handling login
import Login from '../hooks/Login';

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        // Call the Login function with username and password
        console.log('User: ' + username, ' Pass: ' + password);
        console.log(Login(username, password));
    };

    return (
        <div className="content">
            <h1>Login</h1>
            <SafeAreaView style={styles.container}>
                <View>
                    <Text>Username:</Text>
                    <TextInput
                        style={styles.input}
                        value={username}
                        onChangeText={setUsername} // This will update the state on text change
                        autoCapitalize="none"
                    />
                </View>
                <View>
                    <Text>Password:</Text>
                    <TextInput
                        style={styles.input}
                        value={password}
                        onChangeText={setPassword} // This will update the state on text change
                        secureTextEntry // Hides the password
                        autoCapitalize="none"
                    />
                </View>
                <Button
                    title="Login"
                    onPress={handleLogin}
                />
            </SafeAreaView>
        </div>
    );
};

// Stylesheet for the views and text inputs
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export default LoginPage;
