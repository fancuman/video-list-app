import React, { Component } from "react";
import youtube from "./apis/youtube";
import SearchBar from "./components/SearchBar";
export default class App extends Component {
  onHandleSubmit = async input => {
    console.log(input);
    const result = await youtube.get("/search", {
      params: {
        q: input
      }
    });
    console.log(result);
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
            <div>list</div>
          </div>
        </div>
      </div>
    );
  }
}
