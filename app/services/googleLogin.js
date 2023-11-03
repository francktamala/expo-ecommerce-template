import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import firebase from '../../firebase';

export default async function  () {

  const auth = getAuth(firebase);

    const provider = new GoogleAuthProvider();
  
  // Sign-in the user with the credential
  return signInWithPopup(auth, provider); 
}