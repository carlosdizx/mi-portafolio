import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBJjIoMaidY3P0baYUwha89UFnsJ9RWelc",
  authDomain: "portafolio-carlos.firebaseapp.com",
  projectId: "portafolio-carlos",
  storageBucket: "portafolio-carlos.appspot.com",
  messagingSenderId: "1078052358069",
  appId: "1:1078052358069:web:15bf90b374b0426fc3bbfc",
  measurementId: "G-43VHNY882Y"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;

export const STORAGE = firebase.storage();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
