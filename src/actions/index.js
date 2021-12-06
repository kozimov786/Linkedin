import { auth, provider } from '../firebase';
import { signInWithPopup, signOut } from '@firebase/auth';
import { SET_USER } from './actionType'

export const setUser = (payload) => ({
  type: SET_USER,
  user: payload
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