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
import Modal from '../Modal/Modal';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: [],
      showBusinesses: false,
      modalVisible: false,
    }; 
    this.searchYelp = this.searchYelp.bind(this);
    this.backToMain = this.backToMain.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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

  openModal() {
    this.setState({ modalVisible:true });
  }

  closeModal() {
    this.setState({ modalVisible:false })
  }

  render() {
    const { showBusinesses, modalVisible } = this.state;

    return (
      <div className="App">
        <div className="header">
          <div className="headerWrapper">
            <img className="logo" src={logo} alt="site logo" onClick={this.backToMain}/>
            <span onClick={this.backToMain}>Ravenous</span>
            <div className="HeaderButtons">
              <a onClick={this.openModal} className="Sign In">Sign In</a>
            </div>
          </div>
        </div>
        <Modal visible={modalVisible} onClose={this.closeModal}></Modal>
        <SearchBar searchYelp={this.searchYelp}/>
        { showBusinesses ? 
            <BusinessList businesses={this.state.businesses} backToMain={this.backToMain}/> : 
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
