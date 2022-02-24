import React from "react";
import "./Header.css";
import HeaderOption from "./HeaderOption";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import WorkIcon from "@mui/icons-material/Work";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import WorkspacesSharpIcon from "@mui/icons-material/WorkspacesSharp";
import LensBlurSharpIcon from "@mui/icons-material/LensBlurSharp";
import Image from "../src/images/linkedin.png";
import { useDispatch } from "react-redux";
import { logOut } from "./features/userSlice";
import { auth } from "./firebase";

function Header() {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logOut());
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header__left">
        <img src={Image} alt="" />

        <div className="header__left__search">
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption title="Home" Icon={HomeIcon} />
        <HeaderOption title="My Network" Icon={SupervisorAccountIcon} />
        <HeaderOption title="Jobs" Icon={WorkIcon} />
        <HeaderOption title="Messaging" Icon={MessageIcon} />
        <HeaderOption title="Notifications" Icon={NotificationsActiveIcon} />
        <HeaderOption title="Me" avatar={true} onClick={logoutOfApp} />
        <span className="header__right__verticalLine"></span>
        <HeaderOption title="Work" Icon={WorkspacesSharpIcon} />
        <HeaderOption title="Advertise" Icon={LensBlurSharpIcon} />
      </div>
    </div>
  );
}

export default Header;
