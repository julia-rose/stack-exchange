import React, { Component } from 'react';
import './search-container.css';

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    };
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleUpdate(event) {
    this.setState({ searchTerm: event.target.value });
  }

  handleSearch() {
    this.props.setNewSearchTerm(this.state.searchTerm);
  }

  render() {
    return (
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          onChange={this.handleUpdate}
          value={this.state.searchTerm}
        />
        <button 
          onClick={this.handleSearch}
          className="search-button">
            Search
        </button>
      </div>
    );
  }
}

export default SearchContainer;