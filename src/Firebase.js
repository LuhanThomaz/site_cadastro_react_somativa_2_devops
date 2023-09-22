import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



const firebaseConfig = {

    apiKey: "AIzaSyDXETXIs90kfvCS0FkRnhzY2AQ1gb1KS0M",
  
    authDomain: "pagina-7ae45.firebaseapp.com",
  
    projectId: "pagina-7ae45",
  
    storageBucket: "pagina-7ae45.appspot.com",
  
    messagingSenderId: "1088398959239",
  
    appId: "1:1088398959239:web:51e6090f93ccb7c6470e22"
  
  };

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;
  