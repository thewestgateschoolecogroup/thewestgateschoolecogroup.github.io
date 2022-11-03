
const firebaseConfig = {
    apiKey: "AIzaSyCSI8i1NrF1K9u0K-kewGr9tME65liPCnA",
    authDomain: "eco-group-chart.firebaseapp.com",
    projectId: "eco-group-chart",
    storageBucket: "eco-group-chart.appspot.com",
    messagingSenderId: "634814603275",
    appId: "1:634814603275:web:ac40b13513f82b5943e70e",
    measurementId: "G-Z71LD5Q5JM"
  };
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()
var db = firebase.firestore()

function signIn(){
    var email = document.getElementById("email")
    var password = document.getElementById("password")
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    document.getElementById("msg").innerHTML = "Successfully logged in"
    promise.catch(e => document.getElementById("msg").innerHTML = "Email or Password incorrect. Try again")
    
    var lemail = firebase.auth().currentUser.email;
      

    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    

}

function update(){
  db.collection("caps").doc("Air").update({num: air.value});
  db.collection("caps").doc("Earth").update({num: earth.value});
  db.collection("caps").doc("Fire").update({num: fire.value});
  db.collection("caps").doc("Water").update({num: water.value});
  document.getElementById("msg2").innerHTML = "If you signed in chart should be updated."}

function signout(){
  auth.signOut()
  window.location.reload(); 
  
}


