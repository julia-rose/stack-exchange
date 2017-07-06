import React, { Component } from 'react';
import axios from 'axios';
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
    axios.get(`https://api.stackexchange.com/2.2/search?order=desc&sort=activity&intitle=${searchTerm}&site=stackoverflow&key=fJ*nfJpoRTV*cKh8v57QSQ((`)
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
          {this.state.results.map(result =>
            <li className="result-item" key={result.question_id}>
              <a className="result-link" href={result.link} target="_blank">
                {result.title}
              </a>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default ResultsContainer;