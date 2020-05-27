import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

export default class BackendService {

  auth = firebase.auth()
  store = firebase.firestore()

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
}
