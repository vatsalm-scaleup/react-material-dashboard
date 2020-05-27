import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCXhwnSd-upfiCyQuT9ku8kBQum9UusUcA',
  authDomain: 'dashboard-mvp-1e000.firebaseapp.com',
  databaseURL: 'https://dashboard-mvp-1e000.firebaseio.com',
  projectId: 'dashboard-mvp-1e000',
  storageBucket: 'dashboard-mvp-1e000.appspot.com',
  messagingSenderId: '1009097857280',
  appId: '1:1009097857280:web:9b4de22b5f13b91e04bbe5'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default class BackendService {

  auth = firebase.auth()
  store = firebase.firestore()

  getAuth(){
    return new Promise((resolve, reject) => {
      this.auth
        .onAuthStateChanged(user => {
          if(!user) return reject()
          resolve(user)
        }, (error) => reject(error))
    })
  }

  getUserData(){
    return new Promise((resolve, reject) => {
      this.auth
        .onAuthStateChanged(user => {
          if(!user) return reject()
          const {uid} = user
          this.store
            .collection('employers')
            .doc(uid)
            .get()
            .then(dataSnapshot => {
              resolve(dataSnapshot.data())
            })
        }, (error) => reject(error))
    })
  }

  createAuth(obj){
    const {email, password} = obj
    this.auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredential => this.storeUserData(userCredential.user.uid, obj))
  }

  authenticate(obj){
    const {email, password} = obj
    return this.auth
      .signInWithEmailAndPassword(email, password)
  }

  storeUserData(uid, obj){
    const {companyName} = obj
    this.store
      .collection('employers')
      .doc(uid)
      .set({
        companyName
      })
      .then()
  }

  logout(){
    return this.auth
      .signOut()
  }
}
