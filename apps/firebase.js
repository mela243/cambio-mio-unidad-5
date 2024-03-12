 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
 // herramienta de autentificacion
 import { getAuth} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js"
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyC_rVEBsQqwcnWBJMb9mvWwYKlv6bWGUfw",
   authDomain: "gued-4308a.firebaseapp.com",
   projectId: "gued-4308a",
   storageBucket: "gued-4308a.appspot.com",
   messagingSenderId: "148088511081",
   appId: "1:148088511081:web:d1ff04e59eb289077460f8"
 };

 // Initialize Firebase
 // ABRIMOS LA BIBLIOTECA ESCRIBIENDO "export"
export const app = initializeApp(firebaseConfig);
// ABRIMOS LA HERRAMIENTA ESCRIBIENDO "export"
export const auth = getAuth(app)