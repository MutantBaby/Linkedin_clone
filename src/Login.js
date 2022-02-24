import React, { useState } from "react";
import "./Login.css";
import image from "./images/LI-Logo.png";
import { auth } from "./firebase";
import { logIn } from "./features/userSlice";
import { useDispatch } from "react-redux";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  const logInApp = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          logIn({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: name,
            photoUrl: profilePic,
          })
        );
      })
      .catch((error) => alert(error));
  };

  const register = () => {
    if (!name) {
      return alert("Please Enter Full Name");
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            dispatch(
              logIn({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilePic,
              })
            );
          });
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="login">
      <div className="login__container">
        <img src={image} alt="" />
      </div>

      <div className="login__form">
        <h3>Sign in</h3>
        <p>Stay updated on your professional world</p>
        <form action="">
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            placeholder="Name (required if registering)"
          />

          <input
            value={profilePic}
            onChange={(e) => {
              setProfilePic(e.target.value);
            }}
            type="text"
            placeholder="Profile Pic Url (optional)"
          />

          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="Email"
          />

          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Password"
          />

          <button type="submit" onClick={logInApp}>
            Sign in
          </button>
        </form>

        <div className="signup">
          <p>New To LinkedIn? </p>
          <span className="signup__register" onClick={register}>
            Join Now
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
