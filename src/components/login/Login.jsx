import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { initializeApp } from "firebase/app"
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { AuthContext } from "../../App";

const firebaseConfig = {
  apiKey: "AIzaSyAz2HnUlngACkFZ5XlF0zY58BH6hDH_Fqs",
  authDomain: "sma-clothes.firebaseapp.com",
  projectId: "sma-clothes",
  storageBucket: "sma-clothes.appspot.com",
  messagingSenderId: "435125603637",
  appId: "1:435125603637:web:3cf36072c018d90bbd907c"
};

export default function Login() {
    const { setUser } = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    let history = useHistory()
    const app = initializeApp(firebaseConfig)
    const auth = getAuth(app)
    const userLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then(res => didLogin(res.user))
        .catch(err => alert(err.message))
    }
    const googleLogin = (e) => {
        e.preventDefault()
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
        .then(res => didLogin(res.user))
        .catch(err => alert(err.message))
    }
    const didLogin = (user) => {
        localStorage.setItem('userID', user.uid)
        localStorage.setItem('user', JSON.stringify(user))
        setUser(user)
        history.push('/add')
    }
    return (
        <>
            <h1>Please Login:</h1>
            <form onSubmit={e =>{
                e.preventDefault()
                userLogin()
            }}>
                <label htmlFor="email">Email:
                    <input type="email" name="email" value={email} 
                    onChange={e => setEmail(e.target.value)} />
                </label>
                <br />
                <label htmlFor= "password">Password:
                    <input type="password" name="password" value={password}
                    onChange={e => setPassword(e.target.value)} />
                </label>
                <br />
                <input type='submit' value='Login'/> 
                &nbsp;
                <button onClick={e => googleLogin(e)}>Sign in with Google</button>
            </form>
        </>
    )
}
