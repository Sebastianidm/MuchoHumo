import app from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyDci_q36IlbYUncn_rWlFIzSmAF6Q4mnmI",
    authDomain: "marketplace-b3a91.firebaseapp.com",
    projectId: "marketplace-b3a91",
    storageBucket: "marketplace-b3a91.appspot.com",
    messagingSenderId: "1080358729458",
    appId: "1:1080358729458:web:87d4f29e66614c1974426b",
    measurementId: "G-MVEZ71SJGY"
  };

  // inicializar firebase
  app.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();

export {db, auth};
