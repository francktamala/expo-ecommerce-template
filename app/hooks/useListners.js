import React, { useState, useEffect } from 'react';
import { getFirestore, onSnapshot, collection } from "firebase/firestore";
import firebase from '../../firebase';

export default function useListners({ collectionName, callBack }) {
  const [docs, setDocs] = useState([])
  const db = getFirestore(firebase);

  function onResult(QuerySnapshot) {
    console.log('Got Users collection result.', QuerySnapshot?.docs);
    setDocs(QuerySnapshot?.docs)
  }

  function onError(error) {
    console.error(error);
  }

  useEffect(() => {
    const subscriber = onSnapshot(collection(db, collectionName), onResult)
    return () => subscriber();
  }, []);
  return docs;
}
