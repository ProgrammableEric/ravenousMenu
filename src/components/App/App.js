import React, { Component } from 'react';
import logo from '../../assets/soup.png';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../util/Yelp';
import Footer from '../Footer/Footer';
import UpperBody from '../UpperBody/UpperBody';
import LowerBody from '../LowerBody/LowerBody';
import { tsImportEqualsDeclaration } from '@babel/types';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: [],
      showBusinesses: false,
    }; 
    this.searchYelp = this.searchYelp.bind(this);
    this.backToMain = this.backToMain.bind(this);
  }
  
  searchYelp(term, location, sortBy, limit) {
    Yelp.search(term, location, sortBy, limit).then(
      (businesses) => {
        this.setState( {businesses: businesses} );  
        this.setState( {showBusinesses: true} );
      } 
    )
  }

  backToMain() {
    this.setState( {showBusinesses:false} );
  }

  render() {
    const { showBusinesses } = this.state;

    return (
      <div className="App">
        <div className="header">
          <img className="logo" src={logo} alt="site logo" onClick={this.backToMain}/>
          <span onClick={this.backToMain}>ravenous</span>
        </div>
        <SearchBar searchYelp={this.searchYelp}/>
        { showBusinesses ? 
            <BusinessList businesses={this.state.businesses} /> : 
            ( <div className="BodyContent">
                <UpperBody />
                <LowerBody />
              </div>
            )
        }
        <Footer />
      </div>
    )
  }
}

export default App; 


// Sadly Yelp doesn't have its data within China. Search for Chinese location will give 
// an error. So using Yelp API to search while using Google map for location is not ideal. 
