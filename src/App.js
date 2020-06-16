import React, { Component } from 'react';
import { TweetBody } from './Pages/Tweets';
import data from './data.json'
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import ReactPaginate from 'react-paginate';




class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: '',
      offset: 0,
      perPage: 10,
      currentPage: 0

    }

    this.getUser = this.getUser.bind(this)
    this.handlePageClick = this
      .handlePageClick
      .bind(this);
  }

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState({
      currentPage: selectedPage,
      offset: offset
    }, () => {
      this.getUser()
    });

  };


  componentDidMount() {
    this.getUser()
  }

  getUser() {
    console.log(data)
    const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
    const tweets = slice.map((user, index) => {
      let name = `${user.name.first} ${user.name.last}`
      let handle = `@${user.name.first}${user.name.last}`
      let image = user.picture.medium
      let tweet = user.email
      let tweetImage = user.picture.large;
      return (
        <TweetBody
          key={index}
          name={name}
          handle={handle}
          tweet={tweet}
          tweetImage={tweetImage}
          image={image} />
      )
    })

    this.setState({
      pageCount: Math.ceil(data.length / this.state.perPage),
      tweets
    })



  }

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState({
      currentPage: selectedPage,
      offset: offset
    }, () => {
      this.getUser()
    });

  };


  render() {
    return (

      <div className="main-body">
        {this.state.tweets}
        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"} />

      </div>
    );
  }
}

export default App;
