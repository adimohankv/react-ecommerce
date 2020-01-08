import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyBC1EvDFDCyTlv08uSbrmiNjfbug6B86Xc",
    authDomain: "efashion-f3fcd.firebaseapp.com",
    databaseURL: "https://efashion-f3fcd.firebaseio.com",
    projectId: "efashion-f3fcd",
    storageBucket: "efashion-f3fcd.appspot.com",
    messagingSenderId: "415359794929",
    appId: "1:415359794929:web:de02e43d4c766dee20f350"
};

firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({promt: 'select_account'});

export const createUserProfileDocument = async (userAuth, aditionalData) => {
    if (!userAuth) {
        return;
    }

    const userRef = firestore.doc(`/user/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...aditionalData
            })
        } catch (error) {
            console.error(`Error creating user ${error}`);
        }
    }

    return userRef;
};

export const updateCartItems = (userId, cartItems) => {
    try {
        const userRef = firestore.doc(`/user/${userId}`);

        userRef.update({ cartItems });
    } catch (error) {
        console.error(error);
    }
};

export const getCartItems = async (userId) => {
    try {
        const snapshot = await firestore.doc(`/user/${userId}`).get();
        if(snapshot.exists) {
            return snapshot.data().cartItems;
        } else {
            return [];
        };  
    } catch (error) {
        console.error('Failed to load cart items', error);
    }
};

// used to add initial data
export const addCollectionAndDocuments = (collectionsKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionsKey);
    const batch = firestore.batch();

    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });

    batch.commit();
};

export const convertCollectionsSnapshotToMap = (collection) =>{
    const transformedCollection = collection.docs.map(doc => {
        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title),
            id: doc.id,
            items,
            title
        }
    });

    return transformedCollection.reduce((acc, collection) => {
        acc[collection.title.toLowerCase()] = collection;

        return acc;
    }, {});
};

export const getCurrentUser = () => {
    const checkUserPromise = new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged((userAuth) => {
            unsubscribe();
            resolve(userAuth);
        }, reject);
    });

    return checkUserPromise;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;