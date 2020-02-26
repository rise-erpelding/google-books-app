import React, { Component } from 'react';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      printType: "",
      bookType: ""
    }
  }

  searchTermChanged(searchTerm) {
    this.setState({
      searchTerm
    });
  }

  printTypeChanged(printType) {
    this.setState({
      printType
    });
  }

  bookTypeChanged(bookType) {
    this.setState({
      bookType
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const bookParams = {
      q: this.state.searchTerm,
      filter: this.state.bookType,
      printType: this.state.printType
    }

    function formatSearchParams(params) {
      const queryParams = Object.keys(params).map(key => `${key}=${encodeURIComponent(params[key])}`);
      return queryParams.join('&');
    }

    const formattedParams = formatSearchParams(bookParams);

    // console.log(formattedParams);

    this.props.changeHandler(formattedParams);

    // const query = (({searchTerm, printType, bookType}) => ({searchTerm, printType, bookType}))(this.state);
    // const APIkey = 'AIzaSyDWDmQy1RCshVGSBDHOGekF3hbHN8BrCAU';
    // const url ='https://www.googleapis.com/books/v1/volumes?' + 'q=' + searchTerm + '&printType=' + printType + '&filter=' + bookType + '&key=' + APIkey;
    };

  render() {



    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>

        <div className="searchBox">
          <label htmlFor="search">Search:</label>
          <input
            type="text" 
            id="search" 
            name="search" 
            value={this.state.searchTerm}
            onChange={e => this.searchTermChanged(e.target.value)}
            placeholder="search" />
          <button type="submit">Search</button>
        </div>

        <div className="filterBox">
          <div className="printType">
            <label htmlFor="printType">Print Type:</label>
            <select
              id="printType"
              name="printType"
              value={this.state.printType}
              onChange={e => this.printTypeChanged(e.target.value)}
              >
                <option value="all">All</option>
                <option value="books">Books</option>
                <option value="magazines">Magazines</option>
            </select>
          </div>

          <div className="bookType">
          <label htmlFor="bookType">Book Type:</label>
          <select
            id="bookType"
            name="bookType"
            value={this.state.bookType}
            onChange={e => this.bookTypeChanged(e.target.value)}
            >
              {/* <option value="none">No Filter</option> */}
              <option value="partial">Partial</option>
              <option value="full">Full</option>
              <option value="free-ebooks">Free eBooks</option>
              <option value="paid-ebooks">Paid eBooks</option>
              <option value="ebooks">ebooks</option>
          </select>
          </div>
        </div>



        </form>

      </div>

      
    )
  }
}

export default SearchForm;