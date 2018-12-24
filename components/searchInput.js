import React, { Component } from "react";

export default class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };
    this.handleSearchInput = this.handleSearchInput.bind(this);
  }

  handleSearchInput(e) {
    this.setState({
      searchTerm: e.target.value
    });
  }
  render() {
    return (
      <input
        id="suburb-input"
        className="form-control"
        placeholder="Type Town/City"
        value={this.state.searchTerm}
        onChange={this.handleSearchInput}
      />
    );
  }
}
