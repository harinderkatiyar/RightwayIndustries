import React, { Component } from 'react';


class Footer extends Component {

    render () { 
        return <> 
         <footer className="bg-footer" id="footer">
    <div className="container-fluid">
      <div className="row footer-align">
        <div className="col-md-4 col-sm-4">
          <h5>Rightway Industries</h5>
          <hr className="hr-foot" />
          <div className="footer-items">
            <p className="footer">
            We are a leading Manufacturer Trader and Supplier of qualitative assortment of Three Wheeler Forks Center Pins Three Wheeler Torsion Rod etc. The offered product range is designed and manufactured as per the defined quality standard
            </p>
            <ul className="social-networks">
              <a href="/" className="instagram">
                <i className="fa fa-instagram" />
              </a>
              <a href="/" className="facebook">
                <i className="fa fa-facebook" />
              </a>
            </ul>
          </div>
        </div>
        <div className="col-md-4 col-sm-4">
          <h5>Our contact</h5>
          <hr className="hr-foot" />
          <div className="footer-items">
            <address>
            294, Focal Point Rd, Phase IV-A, 
              <br />
              Urban Estate Phase 1, Focal Point,
              <br />
              Ludhiana, Punjab 141010
              <br />
              <i className="fa fa-phone address" /> +091 1234 5678
              <br />
              <i className="fa fa-fax address" /> +876 5432 1234
              <br />
              <i className="fa fa-envelope address" />{" "}
              <a style= {{color:"white"}}href="mailto:northstreet@gmail.com">rigthway_test@gmail.com</a>
            </address>
          </div>
        </div>
        <div className="col-md-4 col-sm-4">
          <h5>Open hours</h5>
          <hr className="hr-foot" />
          <div className="footer-items">
            <ul>
              <li>Mon-Fri: 08:00-20:00</li>
              <li>Sat : 09:00-18:00</li>
              <li>Sun : Closed</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <a className="to-top" href="#home" title="Back to top">
      <i className="fa fa-chevron-up" />
    </a>
  </footer>
  <div className="footer-copyright">
    <p>
      © 2020 Copyright by{" "}
      <a href="/">Rigthway Industries</a>
    </p>
  </div>
        </>
    }
}
export default  Footer ;
