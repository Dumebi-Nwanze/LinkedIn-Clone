import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./Sidebar.css";
function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );
  const user = useSelector(selectUser);
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="https://bit.ly/3Cnsxtp" alt="" />
        <Avatar src={user?.photoUrl} className="sidebar__avatar">
          {user.displayName[0] ?? "U"}
        </Avatar>
        <h2>{user?.displayName}</h2>
        <h4>{user?.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2771</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">1242</p>
        </div>
      </div>
      <div className="sidebar__mid">
        <p>Recent</p>
        {recentItem("react-js")}
        {recentItem("TypeScript")}
        {recentItem("programming")}
        {recentItem("Flutter")}
        {recentItem("Jobs")}
        {recentItem("FAANG/MANGA")}
        {recentItem("Goolge")}
      </div>
    </div>
  );
}

export default Sidebar;
