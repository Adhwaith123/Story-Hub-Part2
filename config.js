import React ,{Component} from 'react'
import Firebase from 'firebase';
let config = {
        apiKey: "AIzaSyAyRp6rrqreM0TtSHGjOV9leqfpGNdPduU",
        authDomain: "storyhub-92a27.firebaseapp.com",
        databaseURL: "https://storyhub-92a27.firebaseio.com",
        projectId: "storyhub-92a27",
        storageBucket: "storyhub-92a27.appspot.com",
        messagingSenderId: "120891055184",
        appId: "1:120891055184:web:73f58fc7a4d15977678555"
      };
      let app= Firebase.initializeApp(config);
      export const db = app.database();