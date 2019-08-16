import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAZEy-gkFm7O1IpcOCTx2Ez86B2pVK33PA",
    authDomain: "chat-box-app-1a11b.firebaseapp.com",
    databaseURL: "https://chat-box-app-1a11b.firebaseio.com"
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base