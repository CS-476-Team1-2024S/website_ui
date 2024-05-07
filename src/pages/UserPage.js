import React, { useState } from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, TextInput } from 'react-native';
import Login from '../hooks/Login';
import Logout from '../hooks/Logout';
import CheckUser from '../hooks/CheckUser';

const UserPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogout = async () => {
        try {
            const data = await Logout(localStorage.getItem('userToken'));
            if (data.Success) {
                localStorage.removeItem('userName');
                localStorage.removeItem('userToken');
                window.location.reload();
            }
            else {
                alert(`Failed to logout: ${data.Content}`);
            }
        } catch (error) {
            alert('Failed calling API: ', error);
        }
    };

    const handleLogin = async () => {
        try {
            const data = await Login(username, password);
            if (data.Success) {
                localStorage.setItem('userName', username);
                localStorage.setItem('userToken', data.Data.Token);
                window.location.reload();
            }
            else {
                alert(`Failed to login: ${data.Content}`);
            }
        } catch (error) {
            alert('Failed calling API: ', error);
        }
    };

    return (
        <div className="content">
            {(CheckUser()) ?
                <><h1>Logged in as {localStorage.getItem('userName')}</h1>
                    <button onClick={handleLogout}>Logout</button></> :
                <><div className="userHolder"><a href='#signup'>Sign Up</a></div>
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
                    </SafeAreaView></>}
        </div>
    );
}
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

export default UserPage;
