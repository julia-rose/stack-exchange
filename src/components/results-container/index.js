import React, { Component } from 'react';
import axios from 'axios';
import ResultItem from '../result-item';
import './results-container.css';

class ResultsContainer extends Component {
	constructor(props) {
		super(props);

    this.state = {
      results: []
    };
    this.fetchResults = this.fetchResults.bind(this);
	}

  fetchResults(searchTerm) {
    const searchType = this.props.searchBy === 'phrase' ? 'intitle' : 'tagged';
    axios.get(`https://api.stackexchange.com/2.2/search?order=desc&sort=activity&${searchType}=${searchTerm}&site=stackoverflow&key=fJ*nfJpoRTV*cKh8v57QSQ((`)
      .then(res => {
        const results = res.data.items;
        this.setState({ results });
      });
  }

	componentDidMount() {
    this.fetchResults(this.props.searchTerm);
  }

  componentWillReceiveProps(nextProps) {
    this.fetchResults(nextProps.searchTerm);
  }

  render() {
    return (
      <div className="results-container">
        <h1 className="results-title">Results</h1>
        <ul className="results-list">
          {this.state.results.length > 0 ? this.state.results.map(result =>
            <ResultItem
              key={result.question_id}
              data={result} />
          )
          : 
            <p className="empty-message">
              Sorry, no results found for <span className="empty-search-term">{this.props.searchTerm}</span>
            </p>
          }
        </ul>
      </div>
    );
  }
}

export default ResultsContainer;
