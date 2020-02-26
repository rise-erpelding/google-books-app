import React, { Component } from 'react';
import Result from '../Result/Result';

class Results extends Component {

  constructor(props) {
    super(props);
    this.state = {
      results: []
    }
  }

  componentDidMount() {
    fetch(this.props.queryURL)
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
    console.log(this.props.queryURL);

    const results = this
                      .state
                      .results
                      .map(obj => (
                        <Result 
                          key={obj.id}
                          title={obj.volumeInfo.title}
                          author={obj.volumeInfo.authors[0]}
                          price={obj.saleInfo.saleability === "FOR_SALE" ? obj.saleInfo.retailPrice.amount : "not for sale"}
                          // currency={obj.saleInfo.retailPrice.currencyCode}
                          summary={obj.volumeInfo.description}
                          thumbnailURL={obj.volumeInfo.imageLinks.thumbnail}
                          googlePlayURL={obj.volumeInfo.infoLink} />
                      ))
    return (
      <div>
        {results}
      </div>
    )
  }
}

export default Results;