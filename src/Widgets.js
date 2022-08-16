import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsArticle = (title, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Summer Heatwave rising", "12334 readers")}
      {newsArticle("Elon Musk backs out of Twitter Deal", "7834 readers")}
      {newsArticle("Global Internship Programme for graduates", "4277 readers")}
      {newsArticle("Stock Market all time high", "2210 readers")}
      {newsArticle("New Bull wave incomming?", "10442 readers")}
      {newsArticle("Joe Rogan: Comedy special up on Netflix", " 6322 readers")}
      {newsArticle("Youtube Boxing event gets cancelled", "4487 readers")}
    </div>
  );
}

export default Widgets;
