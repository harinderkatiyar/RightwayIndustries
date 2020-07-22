import React, { Component } from 'react';
import OurTeamData from '../pages/OurTeamData';
import OurTeamCard from '../pages/OurTeamCard';

class OurTeam extends Component {
    render () { 
        return <>

          {/*Our Team*/}
  <section className="our-team" id="team">
    <div className="container">
      <h2 className="title-our-team wow fadeInUp">Our Team</h2>
  
      <ul className="row">
       {
         OurTeamData.map((val,i)=>{
         return <OurTeamCard  teamProPic={val.image} teamName={val.text}/>
         })
       }
        {/* <li
          className="col-12 col-md-6 col-lg-3 wow fadeInLeft"
          data-wow-duration="1.4s"
        >
          <div className="mycard-block equal-hight">
            <figure>
              <img
                src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                className="img-fluid"
                alt=""
              />
            </figure>
            <h3>
              <a href="/rg-test">Lorem Ipsum</a>
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
            <ul className="follow-us clearfix">
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
                <a href="/rg-test" className="btn btn-circle my-social-btn google">
                  <i className="fa fa-linkedin " />
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li
          className="col-12 col-md-6 col-lg-3 wow fadeInLeft"
          data-wow-duration="1.4s"
        >
          <div className="mycard-block equal-hight">
            <figure>
              <img
                src="https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                className="img-fluid"
                alt=""
              />
            </figure>
            <h3>
              <a href="/rg-test">Lorem Ipsum</a>
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
            <ul className="follow-us clearfix">
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
                <a href="/rg-test" className="btn btn-circle my-social-btn google">
                  <i className="fa fa-linkedin " />
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li
          className="col-12 col-md-6 col-lg-3 wow fadeInLeft"
          data-wow-duration="1.4s"
        >
          <div className="mycard-block equal-hight">
            <figure>
              <img
                src="https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                className="img-fluid"
                alt=""
              />
            </figure>
            <h3>
              <a href="/rg-test">Lorem Ipsum</a>
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
            <ul className="follow-us clearfix">
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
                <a href="/rg-test" className="btn btn-circle my-social-btn google">
                  <i className="fa fa-linkedin " />
                </a>
              </li>
            </ul>
          </div>
        </li> */}
      </ul>
    </div>
  </section>
    </>
    }
}
export default  OurTeam;