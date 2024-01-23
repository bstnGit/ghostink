import { initializeApp, FirebaseApp } from "firebase/app";
import { getDatabase, Database } from "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyChllScZo2guNiAzjqS9CPNMMuI4bsTn4I",
    authDomain: "ghostink-14000.firebaseapp.com",
    databaseURL: "https://ghostink-14000-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "ghostink-14000",
    storageBucket: "ghostink-14000.appspot.com",
    messagingSenderId: "994869892731",
    appId: "1:994869892731:web:1e8f7a92c666dd2ca734de",
    measurementId: "G-J8Q8161HFL"
};

let initialized = false;
let app: FirebaseApp;
let database: Database;

const initializeDatabase = () => {
    if (!initialized) {
        app = initializeApp(firebaseConfig);
        database = getDatabase();
        initialized = true;
    }

    return { app, database };
};

export { initializeDatabase };
