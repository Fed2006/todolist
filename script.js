const firebaseConfig = {
    apiKey: "AIzaSyCLQ2QL5VtcDWz-2Cs1eAJDF5Kst2r7XFs",
    authDomain: "checklist-a6c63.firebaseapp.com",
    databaseURL: "https://checklist-a6c63-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "checklist-a6c63",
    storageBucket: "checklist-a6c63.firebasestorage.app",
    messagingSenderId: "660027599536",
    appId: "1:660027599536:web:333d7674efe8bf88abe975"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function additem(){
    item=document.getElementById("enter").value;
    firebase.database().ref("/").child(item).update({
        purpose: "adding message"
    });
    firebase.database().ref("/").on("value", function(snapshot){
        document.getElementById("bg").innerHTML="";
        snapshot.forEach(function(childSnapshot){
            childitem=childSnapshot.key;
            item=childitem;
            row="<div> "+item+"</div>";
            document.getElementById("bg").innerHTML+=row
        });
    });
}