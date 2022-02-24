import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Login from "./Login";
import Widgets from "./Widgets";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          logOut({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photo: userAuth.photo,
          })
        ); // eslint-disable-next-line
      }
    });
  }, []);

  return (
    <div className="total__app">
      {!user ? (
        <Login />
      ) : (
        <div className="App">
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
