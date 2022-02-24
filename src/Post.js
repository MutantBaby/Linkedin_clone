import { Avatar } from "@mui/material";
import React, { forwardRef } from "react";
import "./Post.css";
import PublicIcon from "@mui/icons-material/Public";
import InputOptions from "./InputOptions";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

const Post = forwardRef(
  ({ name, description, message, photoUrl, time }, ref) => {
    return (
      <div ref={ref} className="post">
        <div className="post__container">
          <Avatar className="post__avatar__icon" src={photoUrl}>
            {name[0]}
          </Avatar>
          <div className="container__setting">
            <div className="post__user">
              <h3 style={{ fontWeight: "750" }}>{name}</h3>
              <p style={{ fontSize: "14px", fontWeight: "600" }}>
                {description}
              </p>
              <p>
                {time}{" "}
                <PublicIcon
                  className="post__user__icon"
                  style={{ fontSize: "20", color: "gray" }}
                />
              </p>
            </div>
            <MoreHorizIcon />
          </div>
        </div>

        <div className="post__message">
          <p>{message}</p>
        </div>

        <div className="post__btn__icon">
          <InputOptions Icon={ThumbUpOutlinedIcon} color="gray" title="Like" />
          <InputOptions Icon={ChatOutlinedIcon} color="gray" title="Comment" />
          <InputOptions Icon={ShareOutlinedIcon} color="gray" title="Share" />
          <InputOptions Icon={SendOutlinedIcon} color="gray" title="Send" />
        </div>
      </div>
    );
  }
);

export default Post;
