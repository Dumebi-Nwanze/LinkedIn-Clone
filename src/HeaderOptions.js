import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./HeaderOption.css";

function HeaderOptions({ avatar, Icon, title, onClick }) {
  const user = useSelector(selectUser);
  return (
    <div onClick={onClick} className="headerOptions">
      {Icon && <Icon className="headerOptions__icon" />}
      {avatar && (
        <Avatar src={user?.photoUrl} className="headerOptions__icon">
          {user?.displayName[0] ?? "U"}
        </Avatar>
      )}
      <h3 className="headerOptions__title">{title}</h3>
    </div>
  );
}

export default HeaderOptions;
