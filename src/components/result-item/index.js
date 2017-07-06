import React, { Component } from 'react';
import './result-item.css';
// svgs from Open Iconic https://useiconic.com/open

class ResultItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const { data } = this.props;
    return(
      <li className="result-item" key={data.question_id}>
        <button
          className="result-title"
          onClick={this.handleClick}>
          {this.state.isOpen ?
            <svg className="caret" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 8 8">
              <path d="M0 0l4 4 4-4h-8z" transform="translate(0 2)" />
            </svg>
          :
            <svg className="caret" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 8 8">
              <path d="M0 0v8l4-4-4-4z" transform="translate(2)" />
            </svg>
          }
          <span className="result-title-text">{data.title}</span>
        </button>
        {this.state.isOpen ?
          <div className="result-details">
            <div className="result-metadata">
              <p className="user-info">
                asked by <a href={data.owner.link} target="_blank">{data.owner.display_name}</a> ({data.owner.reputation})
              </p>

              {data.tags.length > 0 ?
                <div className="tag-info">
                  <span>tagged:</span>
                  {data.tags.map((tag, index) =>
                    <span className="tag-item" key={index}>#{tag}</span>
                  )}
                </div>
              : null}

              {data.answer_count > 0 ?
                <div className="has-answers">
                  <svg className="answers-icon" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 8 8">
                    <path d="M4 0c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm2 1.78l.72.72-3.22 3.22-1.72-1.72.72-.72 1 1 2.5-2.5z" />
                  </svg>
                  <span className="answers-text">Has {data.answer_count} {data.answer_count === 1 ? 'answer' : 'answers'}</span>
                </div>
              :
                <div className="no-answers">
                  <svg className="answers-icon" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 8 8">
                    <path d="M4 0c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm-1.5 1.78l1.5 1.5 1.5-1.5.72.72-1.5 1.5 1.5 1.5-.72.72-1.5-1.5-1.5 1.5-.72-.72 1.5-1.5-1.5-1.5.72-.72z" />
                  </svg>
                   <span className="answers-text">Has no answers yet</span> 
                </div>
              }
            </div>
            <a className="result-link" href={data.link} target="_blank">
              View on Stack Overflow
            </a>
          </div>
        : null}
      </li>
    );
  }
}

export default ResultItem;
