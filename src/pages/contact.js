import React, { Component } from 'react';
import '../styles/App.css';

class Contact extends Component {
  render() {
    return (
      <section className="container">
        <div className="cSection">
        <h2 className="h1-responsive font-weight-bold text-center">Contact me</h2>
        <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. I will come back to you within a matter of hours to help you.</p>
        <div className="row">
        
          <div className="col-md-12 text-center">
              <ul className="list-unstyled">
                  <li><i className="fas fa-map-marker-alt fa-2x"></i>
                      <p>San Diego, CA 94117, USA</p>
                  </li>

                  <li><i className="fas fa-phone mt-4 fa-2x"></i>
                      <p>+ 1 619 885 3285</p>
                  </li>

                  <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                      <p>ocamposjero@gmail.com</p>
                  </li>
              </ul>
          </div>
  
        </div>
      </div>
      </section>

    );
  }
}

export default Contact;