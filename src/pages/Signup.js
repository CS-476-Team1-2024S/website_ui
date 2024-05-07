import React, { useState } from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, TextInput } from 'react-native';
import AddUser from '../hooks/AddUser';
import CheckUser from '../hooks/CheckUser';

const Signup = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = async () => {
        try {
            const data = await AddUser(username, password);
            if (data.Success) {
                alert("Successfully signed up!");
                window.location.href = '#/user';
                window.location.reload();
            }
            else {
                alert(`Failed to signup: ${data.Content}`);
            }
        } catch (error) {
            alert('Failed calling API: ', error);
        }
    };

    if(CheckUser()){
        window.location.href = '#/user';
    }

    return (
        <div className="content">
            <h1>Sign Up</h1>
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
                    title="Sign Up"
                    onPress={handleSignup}
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

export default Signup;