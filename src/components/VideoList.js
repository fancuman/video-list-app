import React, { Component } from "react";
import VideoItem from "./VideoItem";

export default class VideoList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const videos = this.props.videos;
    return (
      <div className="ui list">
        {videos.map(v => (
          <VideoItem key={v.etag} video={v} onSelect={this.props.onSelect} />
        ))}
      </div>
    );
  }
}
