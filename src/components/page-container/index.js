import React, { Component } from 'react';
import ResultsContainer from '../results-container';
import SearchContainer from '../search-container';

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
      <div className="PageContainer">
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