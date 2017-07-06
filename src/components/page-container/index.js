import React, { Component } from 'react';
import ResultsContainer from '../results-container';
import SearchContainer from '../search-container';
import './page-container.css';

class PageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      searchBy: 'phrase'
    };
    this.setNewSearchTerm = this.setNewSearchTerm.bind(this);
    this.setSearchBy = this.setSearchBy.bind(this);
  }

  setNewSearchTerm(newSearchTerm) {
    this.setState({ searchTerm: newSearchTerm });
  }

  setSearchBy(newSearchBy) {
    this.setState({ searchBy: newSearchBy });
  }

  render() {
    return (
      <div className="page-container">
        <h2 className="page-container__intro">
          Confused? Overwhelmed? Utterly bewildered?
        </h2>
        <h1 className="page-container__title">
          Search Stack Overflow!
        </h1>
        <SearchContainer
          setNewSearchTerm={this.setNewSearchTerm}
          setSearchBy={this.setSearchBy} />
        { this.state.searchTerm.length > 0 ?
          <ResultsContainer
            searchTerm={this.state.searchTerm}
            searchBy={this.state.searchBy} />
        : null }
      </div>
    );
  }
}
export default PageContainer;
