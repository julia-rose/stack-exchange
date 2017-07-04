import React, { Component } from 'react';
import axios from 'axios';

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
      <div>
        <h1>Results</h1>
        <ul>
          {this.state.results.map(result =>
            <li key={result.question_id}>
              <a href={result.link}>{result.title}</a>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default ResultsContainer;