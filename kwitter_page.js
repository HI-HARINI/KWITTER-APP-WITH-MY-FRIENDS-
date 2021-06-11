function logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("roomname");
    window.location="index.html"
}
var firebaseConfig = {
    apiKey: "AIzaSyDjGHSwDTAi1PGtU6pSC941--hRCZSdPf8",
    authDomain: "kwitter-app-96439.firebaseapp.com",
    databaseURL: "https://kwitter-app-96439-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-96439",
    storageBucket: "kwitter-app-96439.appspot.com",
    messagingSenderId: "1001898403013",
    appId: "1:1001898403013:web:b195167857227cbd3a7cac"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

roomname=localStorage.getItem("roomname")
username=localStorage.getItem("username")
function send(){
    message=document.getElementById("message").value;
    firebase.database().ref(roomname).push({
        name:username,
        message:message,
        like:0
    })
    document.getElementById("message").value="";
}
function getData(){
    firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") { firebase_message_id = childKey; message_data = childData;
}
}); }); } getData();