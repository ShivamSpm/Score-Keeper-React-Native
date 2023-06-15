import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCRAQ4H0D1fEbkTvCg84PT271p_YwC_hCI",
    authDomain: "score-keeper-ee936.firebaseapp.com",
    projectId: "score-keeper-ee936",
    storageBucket: "score-keeper-ee936.appspot.com",
    messagingSenderId: "215863530571",
    appId: "1:215863530571:web:84669c4c99afc5887e69ce",
    measurementId: "G-PMV2JMPZ8D"
  };

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export { firebase };