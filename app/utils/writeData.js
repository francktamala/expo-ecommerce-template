import { getFirestore, collection, addDoc } from "firebase/firestore";
import firebase from "../../firebase";
export default async (collectionName, data) => {

    const db = getFirestore(firebase)

    return await addDoc(collection(db, collectionName), data)

}