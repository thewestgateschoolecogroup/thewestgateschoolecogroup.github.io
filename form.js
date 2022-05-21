const firebaseConfig = {
    apiKey: "AIzaSyDmu986kSeEoUFtY3kxfa18N4h_5__cqbE",
    authDomain: "feedback-form-a5e44.firebaseapp.com",
    databaseURL: "https://feedback-form-a5e44-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "feedback-form-a5e44",
    storageBucket: "feedback-form-a5e44.appspot.com",
    messagingSenderId: "542710651524",
    appId: "1:542710651524:web:516b98f7284b1f342a00d1",
    measurementId: "G-BLLS806NSX"
  };

firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore()

const db = firestore.collection("formData")

document.getElementById('feedbackForm').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();
    console.log('submit');

    var name = getInputVal('text');
    var email = getInputVal('email');
    var feedback = getInputVal('feedback');

   db.doc().set({
       name: name,
       email: email,
       feedback: feedback,
   }).then( () => {
       console.log("data saved")
   }).catch((error) => {
       console.log(error)
   })
}

function getInputVal(id){
    return document.getElementById(id).value
}