import React, { Component } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Results from '../Results/Results';

class SearchApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      params: 'q=butterflies&filter=partial&printType=books',
      // results: []
    };
  }

  setParams(params) {
    this.setState({
      params
    });
  }

  render() {
    const baseURL = "https://www.googleapis.com/books/v1/volumes?";
    const yourKeyHere = "&key=AIzaSyDWDmQy1RCshVGSBDHOGekF3hbHN8BrCAU";
    const queryURL = baseURL + this.state.params + yourKeyHere;

    // console.log(queryURL);

    return (
      <div>
        <SearchForm
          changeHandler={params => this.setParams(params)} />
        <Results queryURL={queryURL} />
      </div>
    )
  }
}

export default SearchApp;