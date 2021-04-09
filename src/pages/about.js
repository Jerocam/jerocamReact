import React, { Component } from 'react';
import imgAbout from '../assets/images/react-img.png';
import imgAbout2 from '../assets/images/rest-api.png';
import imgAbout4 from '../assets/images/rapidapi.png';
import '../styles/App.css';

class About extends Component {
  render() {
    return (
        <div className="container"> 
          <div className="row abImg">
            <div className="col-md-6">
              <div className="row mb-3"> 
                <div className="col-md-6">
                  <img alt="aboutimage" src={imgAbout2} />
                </div>
                <div className="col-md-6">
                  <img alt="aboutimage" src={imgAbout} />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <img alt="aboutimage" src={imgAbout4} />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h2 className="h2-responsive font-weight-bold pt-3" >RapidAPI - The Next Generation API Platform</h2>
              <h3>What is it?</h3>
              <p>RapidAPI is the world's largest API Marketplace — used by over one million developers to discover and connect to thousands of APIs. Using RapidAPI, developers can search and test the APIs, subscribe, and connect to the APIs — all with a single account, single API key and single SDK.</p>
            </div>
          </div>
        </div>
    );
  }
}

export default About;