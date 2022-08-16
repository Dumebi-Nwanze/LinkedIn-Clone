import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import NotificationIcon from "@mui/icons-material/Notifications";
import ChatIcon from "@mui/icons-material/Chat";
import "./Header.css";
import HeaderOptions from "./HeaderOptions";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
function Header() {
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
    signOut(auth);
  };
  const user = useSelector(selectUser);
  return (
    <div className="header">
      <div className="header__left">
        <img src="https://www.svgrepo.com/show/81143/linkedin.svg" alt="" />
        <div className="header__search">
          {/*Search Icon */}
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOptions Icon={HomeIcon} title="Home" />
        <HeaderOptions Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOptions Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOptions Icon={ChatIcon} title="Messaging" />
        <HeaderOptions Icon={NotificationIcon} title="Notifications" />
        <HeaderOptions
          avatar={user?.photoUrl ?? "U"}
          title="Me"
          onClick={logoutOfApp}
        />
      </div>
    </div>
  );
}

export default Header;
