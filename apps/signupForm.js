//FÓMULA PARA IDENTIFICAR EL REGISTRO

    //OBTENER LA BIBLIOTECA
    import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
    // OBTENER DE LA BIBLIOTECA EL PERMISO PARA GUARDAR LOS DATOS DE REGISTRO
    import { auth } from "./apps/firebase.js";

// RECONOCE EL NOMBRE(ID) DE LA CAJA DONDE ESTA LA INFORMACIÓN
const signupForm=document.querySelector('#signup-form');
//HACER QUE LA FUNCIÓN SE ACTIVE CON EL BOTÓN ( type= "submit")
signupForm.addEventListener('submit',
    async (e)=>{
    e.preventDefault()
    //recnococe la caja con el nombre de su "id"
    const email = signupForm['signup-email'].value
    const password = signupForm['signup-password'].value
    //mostrar los datos del formulario en consola
    console.log(email,password)
    //enviar los datos del formulario a Firebase
    try{
        const userCredentials = await createUserWithEmailAndPassword(auth,email,password)
        console.log(userCredentials)
    } catch(error){
        console.log(error)
    }
   
})