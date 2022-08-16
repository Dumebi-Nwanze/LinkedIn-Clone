import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "./firebase";
import "./Login.css";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const register = async () => {
    if (!name) {
      return alert("Please enter a full name");
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password).then(
        (userAuth) => {
          updateProfile(userAuth.user, {
            displayName: name,
            photoURL: profilePic,
          }).then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoURL: profilePic,
              })
            );
          });
        }
      );
      setName("");
      setProfilePic("");
      setEmail("");
      setPassword("");
    } catch (e) {
      console.log(e.message);
    }
  };
  const loginUser = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        dispatch(
          login({
            email: cred.user.email,
            uid: cred.user.uid,
            displayName: cred.user.displayName,
            photoURL: cred.user.photoURL,
          })
        );
      })
      .catch((e) => alert(e));
  };
  return (
    <div className="login">
      <img
        src="https://iconape.com/wp-content/files/ha/371110/svg/371110.svg"
        alt=""
      />
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name (required if registering)"
        />
        <input
          type="text"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          placeholder="Profile picture URL (optional)"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit" onClick={(e) => loginUser(e)}>
          Sign In
        </button>
      </form>
      <p>
        Not a member?{" "}
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
