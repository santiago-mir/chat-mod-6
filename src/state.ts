import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const API_BASE_URL = "http://localhost:3000";

const firebaseConfig = {
  apiKey: "TZNJuaO2rDMcQS1FW4mvhB5FfaiZpKXTzyphhkri",
  databaseURL: "https://modulo-6-firebase-default-rtdb.firebaseio.com/",
  projectId: "modulo-6-firebase",
  authDomain: "modulo-6-firebase.firebaseapp.com",
};

const app = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(app);

const state = {
  data: {
    userName: "",
    messages: [],
  },
  listeners: [],
  getState() {
    return this.data;
  },
  setState(newState) {
    this.data = newState;
    for (const cb of this.listeners) {
      cb();
    }
    console.log(this.data);
  },
  suscribe(callback: (any) => any) {
    this.listeners.push(callback);
  },
  setUserName() {
    const userName = this.getState().userName;
    fetch(API_BASE_URL + "/users", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ userName }),
    })
      .then((res) => {
        return res.json();
      })
      .then(() => {
        console.log("usuario guardado en la base de datos");
      });
  },
  getUserName() {
    const currentState = this.getState();
    const currentUser = currentState.userName;
    return currentUser;
  },
};

export { state };
