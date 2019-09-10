import React from "react";

export default function VideoDetails(props) {
  if (!props.video) return <div>Loading</div>;
  const { title, description } = props.video.snippet;
  const videoAddr = "https://www.youtube.com/embed/" + props.video.id.videoId;
  return (
    <div>
      <div className="ui segment">
        <div className="ui embed">
          <iframe src={videoAddr} />
        </div>
        <h4 className="ui header">{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}
