import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDETKiMoxpeOSbYgv1Dx2ZOQHd3_kCcMMU",
  authDomain: "shoppn-db.firebaseapp.com",
  databaseURL: "https://shoppn-db.firebaseio.com",
  projectId: "shoppn-db",
  storageBucket: "shoppn-db.appspot.com",
  messagingSenderId: "862779265579",
  appId: "1:862779265579:web:b357e7e2307c449a49906e",
  measurementId: "G-L4VBVC9Q96"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
