import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="ui container">
      <SearchBar />
      <div class="ui grid">
        <div class="ten wide column">
          <div>content</div>
        </div>
        <div class="six wide column">
          <div>list</div>
        </div>
      </div>
    </div>
  );
}

export default App;
