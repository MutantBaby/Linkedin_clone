import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>Linkedin News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Sheru is Pumping", "Thats the top News")}
      {newsArticle("Sheru is Rocking", "Thats the top News")}
      {newsArticle("Uni is shit", "Thats the top News")}
      {newsArticle("Sheru is learning React", "Thats the top News")}
      {newsArticle("Building Clones for Practice", "Thats the top News")}
    </div>
  );
}

export default Widgets;
