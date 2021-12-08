import { auth, provider, storage, } from '../firebase';
import db from '../firebase';
import { signInWithPopup, signOut } from '@firebase/auth';
import { SET_USER, SET_LOADING_STATUS } from './actionType';
import { getDownloadURL, ref, uploadBytesResumable } from '@firebase/storage';
import { collection, addDoc } from '@firebase/firestore';

export const setUser = (payload) => ({
  type: SET_USER,
  user: payload
})

export const setLoading = (status) => ({
  type: SET_LOADING_STATUS,
  status: status
})

export const signInApi = () => {
  return (dispatch) => {
    signInWithPopup(auth, provider).then(payload => {
      dispatch(setUser(payload.user))
    }).catch(error => console.log(error.message))
  }
}
export function getUserAuth() {
  return (dispatch) => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(setUser(user))
      }
    })
  }
}
export function signOutApi() {
  return (dispatch) => {
    signOut(auth).then(() => (dispatch(setUser(null)))).catch(error => console.log(error.message))
  }
}

export function postArticleApi(payload) {
  return (dispatch) => {
    dispatch(setLoading(true))
    if (payload.image !== '') {
      const upload = ref(storage, `images/${payload.image.name}`)
      const uploadTask = uploadBytesResumable(upload)

      uploadTask.on('state_changed', (snapshot) => {
        const prog = snapshot.bytesTransferred / snapshot.totalBytes * 100
        console.log(prog);
        if (snapshot.state === "RUNNING") {
          console.log(`Progress ${prog}`)
        }
      },
        getDownloadURL(uploadTask.snapshot.ref),
        dispatch(setLoading(false))
      )
      addDoc(collection(db, 'posts'), {
        description: payload.user.email,
        title: payload.user.displayName,
        image: payload.user.photoURL,
        date: payload.createdAt,
      })
    }
  }
}