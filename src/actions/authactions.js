import {
	authRef,
	singleUserRef,
	FIREBASE_AUTH_PERSIST,
} from '../config/firebase'
import firebase from 'firebase/app'
import {
	FETCH_USER,
	FETCH_USER_SUCCESS,
	FETCH_USER_FAILED,
	USER_SIGN_IN,
	USER_SIGN_IN_FAILED,
	USER_SIGN_OUT,
	CLEAR_LOGIN_ERROR,
	CLEAR_SIGNUP_ERROR,
} from './types'
import language from '../config/language'

export const fetchUser = () => (dispatch) => {
	dispatch({
		type: FETCH_USER,
		payload: null,
	})
	authRef.onAuthStateChanged((user) => {
		if (user) {
			singleUserRef(user.uid).once('value', (snapshot) => {
				dispatch({
					type: FETCH_USER_SUCCESS,
					payload: user,
				})
			})
		} else {
			dispatch({
				type: FETCH_USER_FAILED,
				payload: null,
			})
		}
	})
}

export const signIn = (username, password) => (dispatch) => {
	authRef
		.setPersistence(FIREBASE_AUTH_PERSIST)
		.then(function () {
			authRef
				.signInWithEmailAndPassword(username, password)
				.then((user) => {
					dispatch({
						type: USER_SIGN_IN,
						payload: null,
					})
				})
				.catch((error) => {
					dispatch({
						type: USER_SIGN_IN_FAILED,
						payload: error,
					})
				})
		})
		.catch(function (error) {
			dispatch({
				type: USER_SIGN_IN_FAILED,
				payload: 'Firebase Auth Error',
			})
		})
}

export const signUp = (username, password, mobile, fname, lname) => (
	dispatch
) => {
	var regData = {
		mobile: mobile,
		email: username,
		usertype: 'user',
		createdAt: new Date().toISOString(),
	}

	var walletData = {
		balance: 0,
		createdAt: new Date().toISOString(),
	}

	authRef
		.createUserWithEmailAndPassword(username, password)
		.then((newUser) => {
			if (newUser) {
				authRef.currentUser
					.updateProfile({
						displayName: fname + ' ' + lname,
					})
					.then(() => {
						firebase
							.database()
							.ref('users/')
							.child(authRef.currentUser.uid)
							.set(regData)
					})
					.then(() => {
						firebase.database
							.ref('wallet/')
							.child(authRef.currentUser.uid)
							.set(walletData)
							.then(() => {
								authRef.signOut()
								window.history.back()
								alert(language.account_successful_done)
							})
					})
			}
		})
		.catch((error) => {
			dispatch({
				type: USER_SIGN_IN_FAILED,
				payload: error,
			})
		})
}

export const signOut = () => (dispatch) => {
	authRef
		.signOut()
		.then(() => {
			dispatch({
				type: USER_SIGN_OUT,
				payload: null,
			})
		})
		.catch((error) => {
			//console.log(error);
		})
}

export const clearLoginError = () => (dispatch) => {
	dispatch({
		type: CLEAR_LOGIN_ERROR,
		payload: null,
	})
}

export const clearSignupError = () => (dispatch) => {
	dispatch({
		type: CLEAR_SIGNUP_ERROR,
		payload: null,
	})
}
