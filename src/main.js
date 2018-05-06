import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { store } from './store'
import firebase from 'firebase'

Vue.use(Vuetify)
firebase.initializeApp({
  apiKey: 'AIzaSyB1obL8AsTQFqsHtOkoWaoJCwpBGunJL0o',
  authDomain: 'braille-writer-f585e.firebaseapp.com',
  databaseURL: 'https://braille-writer-f585e.firebaseio.com',
  projectId: 'braille-writer-f585e',
  storageBucket: 'braille-writer-f585e.appspot.com',
  messagingSenderId: '1066373863562'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
const unsubscribe = firebase.auth()
.onAuthStateChanged((firebaseUser) => {
  new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
    created () {
      if (firebaseUser) {
        store.dispatch('autoSignIn', firebaseUser)
      }
    }
  })
  unsubscribe()
})
