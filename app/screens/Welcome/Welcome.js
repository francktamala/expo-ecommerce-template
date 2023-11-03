import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import firebase from '../../../firebase';

export default function Welcome({ navigation }) {
  const auth = getAuth(firebase);
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  function onAuthStateChange(user) {
    setUser(user);
    if (user) {
      navigation.navigate("Home")
    } else {
      navigation.navigate("Login")
    }
    if (initializing) setInitializing(false);
  }
  useEffect(() => {
    const subscriber = onAuthStateChanged(auth, onAuthStateChange);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;


  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <Text>Welcome to Amusoftech</Text>
    </View>
  )
}
