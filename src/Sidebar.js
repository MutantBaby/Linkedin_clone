import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";
import WorkspacePremiumSharpIcon from "@mui/icons-material/WorkspacePremiumSharp";
import TurnedInSharpIcon from "@mui/icons-material/TurnedInSharp";
import GroupsSharpIcon from "@mui/icons-material/GroupsSharp";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import TagSharpIcon from "@mui/icons-material/TagSharp";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function Sidebar() {
  const user = useSelector(selectUser);

  const sidebarRecent = (topic) => (
    <div className="sidebar__item">
      <span className="item__hash">
        <TagSharpIcon />
      </span>
      <p>{topic}</p>
    </div>
  );

  const sidebarGroup = (topic) => (
    <div className="sidebar__item">
      <span className="item__hash">
        <GroupsSharpIcon />
      </span>
      <p>{topic}</p>
    </div>
  );

  const sidebarEvent = (topic) => (
    <div className="sidebar__item">
      <span className="item__hash">
        <EventNoteOutlinedIcon />
      </span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__upper__portion">
        <div className="sidebar__top">
          <img
            src="https://images.unsplash.com/photo-1535478044878-3ed83d5456ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmxlbmQlMjBjb2xvcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
            alt=""
          />
          <Avatar src={user.photoUrl} className="sidebar__top__avatar">
            {user.email[0]}
          </Avatar>
          <h3>{user.displayName}</h3>
          <h4>{user.email}</h4>
        </div>

        <div className="sidebar__stats">
          <div className="sidebar__stat0">
            <p>Who viewed your profile</p>
            <span className="sidebar__stat0__number">3,452</span>
          </div>
          <div className="sidebar__stat0">
            <p>Views of your posts</p>
            <span className="sidebar__stat0__number">2,342</span>
          </div>
        </div>

        <div className="sidebar__features">
          <div className="sidebar__features__contant">
            <WorkspacePremiumSharpIcon style={{ color: "orange" }} />
            <span>See all Premium features</span>
          </div>
          <div className="sidebar__features__contant">
            <TurnedInSharpIcon style={{ color: "gray" }} />
            <span>My items</span>
          </div>
        </div>
      </div>

      <div className="sidebar__lower__portion">
        <div className="sidebar__bottom__recent">
          <h5>Recent</h5>
          {sidebarRecent("Programming")}
          {sidebarRecent("Blockchain")}
          {sidebarRecent("Software Engineering")}
          {sidebarRecent("Developer")}
          {sidebarRecent("Reactjs")}
        </div>

        <div className="sidebar__bottom__group">
          <h5>Groups</h5>
          {sidebarGroup("Pakistan Women's Security")}
          {sidebarGroup("Air University Hackton")}
          {sidebarGroup("Reactjs Wonder")}
          {sidebarGroup("Boys Who Code")}
          {sidebarGroup("Startup Community")}
        </div>

        <div className="sidebar__bottom__event">
          <h5>Events</h5>
          {sidebarEvent("TechMaker Compo")}
          {sidebarEvent("Hacker Machines")}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
