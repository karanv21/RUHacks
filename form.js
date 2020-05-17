//var failureCondition=false;
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDPRzW7DbMkRTEY_LOvZR5iewZBmisFQ2I",
  authDomain: "ruhacks-6a4bf.firebaseapp.com",
  databaseURL: "https://ruhacks-6a4bf.firebaseio.com",
  projectId: "ruhacks-6a4bf",
  storageBucket: "ruhacks-6a4bf.appspot.com",
  messagingSenderId: "877156303034",
  appId: "1:877156303034:web:4665d49dea612e2761c283"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();


function signUp(){
var email = document.getElementById("email");
var password = document.getElementById("password");

const promise = auth.createUserWithEmailAndPassword(email.value, password.value);

//promise.catch(failureCondition=true);
promise.catch(e=>alert(e.message));

//if(failureCondition){
  //dontvisitDashboard();
// }else{
  alert("Signed Up");
  visitDashboard();
//}

}

function signIn() {
var email = document.getElementById("email");
var password = document.getElementById("password");

const promise = auth.signInWithEmailAndPassword(email.value, password.value);

 //take them to

//promise.catch(failureCondition=true);
promise.catch(e=>alert(e.message));
//if(failureCondition){
//  dontvisitHome();
//}else{
  alert("Signed In");
  visitHome();
//}

// alert("Signed In" + email.value);

//Take user to a different home page
}


function visitHome() {
window.location='home.html';
}
// function dontvisitHome() {
//   alert("Invalid details");
//   failureCondition=false;
// }

// function dontvisitDashboard() {
//   alert("Invalid credentials");
//   failureCondition=false;
// }

function visitDashboard() {
window.location='dashboard.html';
}

function signOut() {
auth.SignOut();
alert("Signed Out");
}

auth.onAuthStateChanged(function(user){

if(user) {
  //is signed in
  var email = user.email;
  alert("Active User " + email);
} else {
  //no user is signed in
  alert("No Active User");
}
});
