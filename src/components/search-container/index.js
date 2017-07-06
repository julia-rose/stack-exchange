import React, { Component } from 'react';
import './search-container.css';

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      searchBy: 'phrase'
    };
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleUpdate(event) {
    this.setState({ searchTerm: event.target.value });
  }

  handleToggle(event) {
    this.setState({ searchBy: event.target.value });
    this.props.setSearchBy(event.target.value);
  }

  handleSearch() {
    this.props.setNewSearchTerm(this.state.searchTerm);
  }

  render() {
    return (
      <div className="search-container">
        <div className="radio-buttons">
          <label className="option-phrase">
            <input
              type="radio"
              value="phrase"
              checked={this.state.searchBy === 'phrase'}
              onChange={this.handleToggle} />
            Search by phrase
          </label>
          <label className="option-tag">
            <input
              type="radio"
              value="tag"
              checked={this.state.searchBy === 'tag'}
              onChange={this.handleToggle} />
            Search by tag
          </label>
        </div>
        <div className="input-container">
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
      </div>
    );
  }
}

export default SearchContainer;
