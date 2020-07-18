import React, { Component } from 'react';
import BackVideo from '../images/v5.mp4'

class Header extends Component {
    render () { 
        return <> 
        <header id="home">
     <div className="overlay"  >
     <video id="background-video" className="backVideo-mobile" loop autoPlay muted>
  <source src={BackVideo} type="video/mp4"/>
</video>
       {/* <img src={Web} alt={Web} width="1500px" height="100%"></img> */}
     </div>
     <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
       <div className="container-fluid">
         <a className="navbar-brand" href="/rg-test">
           <h3 className="my-heading "> Rigthway Industries</h3>
         </a>
         <button
           className="navbar-toggler navbar-toggler-right"
           type="button"
           data-toggle="collapse"
           data-target="#navbarResponsive"
           aria-controls="navbarResponsive"
           aria-expanded="false"
           aria-label="Toggle navigation"
         >
           <span className="fa fa-bars mfa-white" />
         </button>
         <div className="collapse navbar-collapse" id="navbarResponsive">
           <ul className="navbar-nav ml-auto">
             <li className="nav-item">
               <a className="nav-link" href="#home">
                 Home
               </a>
             </li>
             <li className="nav-item">
               <a className="nav-link" href="#overview">
                 Overview
               </a>
             </li>
             <li className="nav-item">
               <a className="nav-link" href="#services">             
                Services
               </a>
             </li>
             <li className="nav-item">
               <a className="nav-link" href="#team">
                 Team
               </a>
             </li>
           
             <li className="nav-item">
               <a className="nav-link" href="#contact">
                 Contact
               </a>
             </li>
           </ul>
         </div>
       </div>
     </nav>
   
  <div className="tophead">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-7 ">
        <h1 className="title-main wow fadeInLeft" data-wow-duration="1.5s">Welcome to <p>Rigthway Industries</p></h1>
          <h3 className="subtitle-main wow fadeInUp" data-wow-duration="1.1s">We are a leading Manufacturer Trader and Supplier of qualitative assortment of Three Wheeler Forks Center Pins Three Wheeler Torsion Rod etc. The offered product range is designed and manufactured as per the defined quality standard.</h3>
						<div className="top-btn-block wow fadeInUp" data-wow-duration="2.5s">
          <a href="#contact" className="tcvpb_background_center">
          <button type="button" className="btn btn-outline-info">Contact Us</button>
            
          </a>
          {/* <a href="/rg-test" className="btn-account ">
            Create Account
          </a> */}
        </div>
      </div>
    </div>
  </div>
 
</div>
<div className="sesgoabajo" ></div>

   </header>
        
        </>
    }

}
export default  Header;

