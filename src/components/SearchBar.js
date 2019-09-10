import React, { Component } from "react";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { inputVal: "" };
  }
  onInputChange = e => {
    this.setState({ ...this.state, inputVal: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    if (this.state.inputVal) this.props.onSubmit(this.state.inputVal);
    this.setState({ ...this.state, inputVal: "" });
  };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onSubmit}>
          <div className="ui field">
            <label>Search video:</label>
          </div>
          <div className="ui field">
            <input value={this.state.inputVal} onChange={this.onInputChange} />
          </div>
        </form>
      </div>
    );
  }
}
