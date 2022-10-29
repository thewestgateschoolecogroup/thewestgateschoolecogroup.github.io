
const firebaseConfig = {
    apiKey: "AIzaSyDmu986kSeEoUFtY3kxfa18N4h_5__cqbE",
    authDomain: "feedback-form-a5e44.firebaseapp.com",
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
    var today = new Date();
    var date = today.getFullYear()+'.'+(today.getMonth()+1)+'.'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

   db.doc().set({
       name: name,
       email: email,
       feedback: feedback,
       time: time,
       date: date,

   }).then( () => {
       console.log("data saved");
       submitStop();
       

   }).catch((error) => {
       console.log(error);
       problem()
       
   })
   
}
function problem(){

    document.getElementById("error").style.opacity = "1";
}

function submitStop(){
    document.getElementById("error").style.opacity = "0";
    document.getElementById('text').setAttribute("disabled","disabled");   
    document.getElementById('email').setAttribute("disabled","disabled");     
    document.getElementById('feedback').disabled = 'true';
    document.getElementById('submit').setAttribute("disabled","disabled");
    document.getElementById('success').style.opacity = '1';
    document.getElementById('text').style.backgroundColor = "darkgrey";   
    document.getElementById('email').style.backgroundColor = "darkgrey";     
    document.getElementById('feedback').style.backgroundColor = "darkgrey";
    document.getElementById('submit').style.backgroundColor = "darkgrey";
}

function getInputVal(id){
    return document.getElementById(id).value
}