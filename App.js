
import React, { useEffect, useState } from 'react';
import MainStack from './app/routing/MainStack';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import storePre from './app/redux/store';
import DropdownAlert from 'react-native-dropdownalert';
import { AlertHelper } from './app/utils/AlertHelper';
import { PersistGate } from 'redux-persist/integration/react';
import TabNavigationStack from './app/routing/TabNavigationStack';
import { navigationTypeTabs } from './app.json';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { initializeApp } from 'firebase/app';
import firebase from './firebase';



MaterialIcons.loadFont()
Ionicons.loadFont()
FontAwesome.loadFont()
Feather.loadFont()
MaterialCommunityIcons.loadFont()
function App() {
  const { persistor, store } = storePre;

  const firebaseConfig = {
    apiKey: "AIzaSyBW84ML6OU4_9wOR34lNK1SYftxXsrEepk",
    authDomain: "shop-8ced3.firebaseapp.com",
    projectId: "shop-8ced3",
    storageBucket: "shop-8ced3.appspot.com",
    messagingSenderId: "1090323738531",
    appId: "1:1090323738531:web:e15112619d9266013cf416",
    measurementId: "G-XKKRFRTZJ7"
  };

  const app = firebase;

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {navigationTypeTabs ? <TabNavigationStack /> : <MainStack />}
        <DropdownAlert
          defaultContainer={{
            padding: 8,
            paddingTop: StatusBar.currentHeight,
            flexDirection: 'row',
          }}
          // ref={(ref) => AlertHelper.setDropDown(ref)}
          onClose={() => AlertHelper.invokeOnClose()}
        />
      </PersistGate>
    </Provider>
  );
};

export default App;
