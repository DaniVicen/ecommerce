// Importe las funciones que necesita de los SDK que necesita
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Agrega SDK para los productos de Firebase que quieras usar
// https://firebase.google.com/docs/web/setup#available-libraries

// La configuración de Firebase de tu aplicación web
const firebaseConfig = {
  apiKey: "AIzaSyCyLUdnPJ-aITvdfn6Gip-wXqzhaaVoQvY",
  authDomain: "test-ecommerce-91c59.firebaseapp.com",
  projectId: "test-ecommerce-91c59",
  storageBucket: "test-ecommerce-91c59.appspot.com",
  messagingSenderId: "273866778057",
  appId: "1:273866778057:web:6ca8dd917c677d8a893418"
};

// Iniciar Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db