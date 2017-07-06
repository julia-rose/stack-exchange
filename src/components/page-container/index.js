import React, { Component } from 'react';
import ResultsContainer from '../results-container';
import SearchContainer from '../search-container';
import './page-container.css';

class PageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    };
    this.setNewSearchTerm = this.setNewSearchTerm.bind(this);
  }

  setNewSearchTerm(newSearchTerm) {
    this.setState({ searchTerm: newSearchTerm });
  }

  render() {
    return (
      <div className="page-container">
        <h2 className="page-container__title">
          Confused? Overwhelmed? Utterly bewildered?
        </h2>
        <h1 className="page-container__subtitle">
          Search Stack Overflow!
        </h1>
        <SearchContainer
          setNewSearchTerm={this.setNewSearchTerm} />
        { this.state.searchTerm.length > 0 ?
          <ResultsContainer
            searchTerm={this.state.searchTerm} />
        : null }
      </div>
    );
  }
}
export default PageContainer;