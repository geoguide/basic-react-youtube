import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
    this.handleChange = this.handleChange.bind(this);
  }
  render() {
    return (
      <div>
        <input
          onChange={this.handleChange}
        />
      </div>
    );
  }
  handleChange(event) {
    this.setState({ term:event.target.value });
  }
}

export default SearchBar;
