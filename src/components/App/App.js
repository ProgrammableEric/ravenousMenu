import React, { Component } from 'react';
import logo from '../../assets/soup.png';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../util/Yelp';
import Footer from '../Footer/Footer';
import UpperBody from '../UpperBody/UpperBody';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: [],
    }; 
    this.searchYelp = this.searchYelp.bind(this);
  }
  
  searchYelp(term, location, sortBy, limit) {
    Yelp.search(term, location, sortBy, limit).then(
      (businesses) => {
        this.setState( {businesses: businesses} );  
      }
    )
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <img className="logo" src={logo} alt="site logo"/>
          <span>ravenous</span>
        </div>
        <SearchBar searchYelp={this.searchYelp}/>
        <UpperBody />
        <BusinessList businesses={this.state.businesses} />
        <Footer />
      </div>
    )
  }
}

export default App; 


// Sadly Yelp doesn't have its data within China. Search for Chinese location will give 
// an error. So using Yelp API to search while using Google map for location is not ideal. 
