import React, { Component } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Results from '../Results/Results';



class SearchApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      params: 'q=butterflies&filter=partial&printType=books',
      results: []
    };
  }

  setParams(params) {
    this.setState({
      params
    });
    this.getBooks(params);
  }

  getBooks(params) {
    fetch("https://www.googleapis.com/books/v1/volumes?" + this.state.params + "&key=AIzaSyDWDmQy1RCshVGSBDHOGekF3hbHN8BrCAU")
      .then(res => {
      if(!res.ok) {
        throw new Error('Something went wrong, please try again later');
        }
        return res.json();
      })
      .then(data => {

      console.log(data.items);

      this.setState({
        results: data.items
      })
    })
    .catch(err => {
      console.log(err.message);
      this.setState({
        error: err.message
      });
    });
  }
    

  render() {
    // const baseURL = "https://www.googleapis.com/books/v1/volumes?";
    // const yourKeyHere = "&key=AIzaSyDWDmQy1RCshVGSBDHOGekF3hbHN8BrCAU";
    // const queryURL = baseURL + this.state.params + yourKeyHere;

    // console.log(queryURL);

    return (
      <div>
        <SearchForm
          changeHandler={params => this.setParams(params)} />
        <Results results={this.state.results} />
      </div>
    )
  }
}

export default SearchApp;