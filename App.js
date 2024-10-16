import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Button, Platform, NativeModules} from 'react-native';
import {authorize} from 'react-native-app-auth';
// import AzureAuth from 'react-native-azure-auth';
const CLIENT_ID = "dbbd1773-85d9-43dd-93ad-1ed5b7428f1a";
const TENANT_ID = "5b9fe634-7895-4904-8fed-4ec5976b7a3a";

const config = {
  issuer: `https://login.microsoftonline.com/${TENANT_ID}/v2.0/`,
  clientId: CLIENT_ID,
  redirectUrl: "com.apptest://oauth/auth/",
  scopes: ['openid', 'profile', 'email', 'offline_access'],
};
function App() {
  const [uid, setUid] = useState(null);
  const loginMicrosoft = async () => {
    try {
      console.log('Login Microsoft...');
      await authorize(config);
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <View style={styles.container}>
        <Button title="Login with Microsoft" color="#0078D7" onPress={loginMicrosoft} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  successText: {
    fontSize: 16,
    color: 'green',
    marginBottom: 20,
  },
  authenticatingText: {
    fontSize: 16,
    color: 'orange',
    marginBottom: 20,
  },
  instructionText: {
    fontSize: 16,
    color: 'black',
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default App;
