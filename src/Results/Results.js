import React, { Component } from 'react';
import Result from '../Result/Result';

const url = "https://www.googleapis.com/books/v1/volumes?q=henry%20david&filter=partial&printType=all&key=AIzaSyDWDmQy1RCshVGSBDHOGekF3hbHN8BrCAU";

class Results extends Component {

  constructor(props) {
    super(props);
    this.state = {
      results: []
    }
  }

  componentDidMount() {
    fetch(url)
    .then(res => {
      if(!res.ok) {
        throw new Error('Something went wrong, please try again later');
      }
      return res.json();
    })
    .then(data => {

      console.log(data.items);
      // console.log(data.items[0]);
      // //Title
      // console.log(data.items[0].volumeInfo.title);
      // //Author
      // console.log(data.items[0].volumeInfo.authors[0]);
      // //Price
      // console.log(data.items[0].saleInfo.listPrice.amount);
      // //Currency
      // console.log(data.items[0].saleInfo.listPrice.currencyCode);
      // //Quick summary
      // console.log(data.items[0].volumeInfo.description);
      // //Thumbnail of cover
      // console.log(data.items[0].volumeInfo.imageLinks.thumbnail);
      // //Link to see more
      // console.log(data.items[0].volumeInfo.infoLink);

      this.setState({
        results: data.items
      })
    })
    .catch(err => {
      console.log(err.message);
      // this.setState({
      //   error: err.message
      // });
    });
  }

  render() {
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