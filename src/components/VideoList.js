import React, { Component } from "react";
import VideoItem from "./VideoItem";

export default class VideoList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const videos = this.props.videos;
    return (
      <div className="video-tiem ui list">
        {videos.map(v => (
          <VideoItem key={v.etag} video={v} />
        ))}
      </div>
    );
  }
}
