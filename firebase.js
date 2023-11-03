import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyBW84ML6OU4_9wOR34lNK1SYftxXsrEepk",
    authDomain: "shop-8ced3.firebaseapp.com",
    projectId: "shop-8ced3",
    storageBucket: "shop-8ced3.appspot.com",
    messagingSenderId: "1090323738531",
    appId: "1:1090323738531:web:e15112619d9266013cf416",
    measurementId: "G-XKKRFRTZJ7"
  };

  const firebase = initializeApp(firebaseConfig);

  export default firebase