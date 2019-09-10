import React from "react";
import "./videoItem.css";

export default function VideoItem(props) {
  console.log(JSON.stringify(props));
  const { title, thumbnails } = props.video.snippet;
  return (
    <div className="video-tiem item">
      <img alt={title} className="ui image" src={thumbnails.medium.url} />
      <div className="content">
        <div className="header">{title}</div>
      </div>
    </div>
  );
}
