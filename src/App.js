import React, { Component } from "react";
import youtube from "./apis/youtube";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [] };
  }
  onHandleSubmit = async input => {
    console.log(input);
    const result = await youtube.get("/search", {
      params: {
        q: input
      }
    });
    console.log(result.data.items);
    this.setState({ ...this.state, videos: result.data.items });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onHandleSubmit} />
        <div className="ui grid">
          <div className="ten wide column">
            <div>content</div>
          </div>
          <div className="six wide column">
            <VideoList videos={this.state.videos} />
          </div>
        </div>
      </div>
    );
  }
}
