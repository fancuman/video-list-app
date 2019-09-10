import React from "react";

export default function VideoDetails(props) {
  if (!props.video) return <div>Loading</div>;
  const description = props.video.snippet.description;
  return <div className="ui segment">{description}</div>;
}
