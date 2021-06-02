import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyAtLfXcoT2e5IH5MKn06UBDA6QpDH1ajW8',
	authDomain: 'social-faa34.firebaseapp.com',
	projectId: 'social-faa34',
	storageBucket: 'social-faa34.appspot.com',
	messagingSenderId: '279574867497',
	appId: '1:279574867497:web:b829daef96f1d5942c3638'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider, storage };
