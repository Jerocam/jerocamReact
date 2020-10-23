import React, { Component } from 'react';
import imgAbout from '../assets/images/react-img.png';
import '../styles/App.css';

class About extends Component {
  render() {
    return (
        <div className="container"> 
          <div className="row abImg">
            <div className="col-md-6">
              <img alt="aboutimage" src={imgAbout} />
            </div>
            <div className="col-md-6">
              <h2 class="h1-responsive font-weight-bold pt-3">About Me</h2>
              <p>My name is Jeronimo Jose Ocampos Escobar. I am entry-level Front End Developer and Web Designer, and intermediate-level Graphic Designer. I have a passion for design, and am a high-motivated, fast-learner who is excited to build successful websites that are very organized, easy to use and fast to load. Currently, I am seeking an internship that will challenge me to improve my skill strength with the latest Front End Development tools.</p>
            </div>
          </div>
        </div>
    );
  }
}

export default About;