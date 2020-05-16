var mainText = document.getElementById("mainText");
var submitBtn = document.getElementById("submitBtn");

function submitClick() {

  var firebaseRef = firebase.database().ref();
  var messageText = mainText.value;
  firebaseRef.child("Text").set(messageText);
 }
