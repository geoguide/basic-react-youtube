import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
    this.onSearch = props.onSearch;
  }
  render() {
    return (
      <div className="search-bar">
        <input
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }
  onInputChange(term) {
    this.setState({ term });
    this.props.onSearch(term);
  }
}

export default SearchBar;
