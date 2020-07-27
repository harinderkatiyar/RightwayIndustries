import React, { Component } from 'react'

class OurTeamCard extends Component {
    render () { 
        return <>
  <li
          className="col-12 col-md-6 col-lg-3 wow fadeInLeft"
          data-wow-duration="1.4s"
        >
          <div className="mycard-block equal-hight">
            <figure>
              <img
                       src={this.props.teamProPic}
                       className="img-fluid"
                      
                alt=""
              />
            </figure>
            <h3>
    <a href="/rg-test">{this.props.teamName}</a>
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
            {/* <ul className="follow-us clearfix">
              <li>
                <a href="/rg-test" className="btn btn-circle my-social-btn fb">
                  <i className="fa fa-facebook " />
                </a>
              </li>
              <li>
                <a href="/rg-test" className="btn btn-circle my-social-btn twitter">
                  <i className="fa fa-twitter " />
                </a>
              </li>
              <li>
                <a href="/rg-test"
                 className="btn btn-circle my-social-btn google">
                  <i className="fa fa-linkedin " />
                </a>
              </li>
            </ul> */}
          </div>
        </li>
        </>
    }
}
export default OurTeamCard;