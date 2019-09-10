import React, { Component } from "react";
import youtube from "./apis/youtube";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetails from "./components/VideoDetails";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [], selectedVideo: null };
  }
  onHandleSubmit = async input => {
    console.log(input);
    const result = await youtube.get("/search", {
      params: {
        q: input
      }
    });
    console.log(result.data.items);
    this.setState({
      ...this.state,
      videos: result.data.items,
      selectedVideo: result.data.items[0]
    });
  };
  onSelectVideo = video => {
    console.log("select video:", JSON.stringify(video));
    this.setState({ ...this.state, selectedVideo: video });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onHandleSubmit} />
        <div className="ui grid">
          <div className="ten wide column">
            <VideoDetails video={this.state.selectedVideo} />
          </div>
          <div className="six wide column">
            <VideoList
              videos={this.state.videos}
              onSelect={this.onSelectVideo}
            />
          </div>
        </div>
      </div>
    );
  }
}
