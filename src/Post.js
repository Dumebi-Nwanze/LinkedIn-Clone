import React from "react";
import { Avatar } from "@mui/material";
import "./Post.css";
import InputOption from "./InputOption";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ShareOutlinedIcon from "@mui/icons-material/SendOutlined";
import SendOutlinedIcon from "@mui/icons-material/ShareOutlined";
const Post = ({ name, description, message, photoUrl }) => {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__buttons">
        <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray" />
        <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray" />
        <InputOption Icon={ShareOutlinedIcon} title="Send" color="gray" />
        <InputOption Icon={SendOutlinedIcon} title="Share" color="gray" />
      </div>
    </div>
  );
};
export default Post;
