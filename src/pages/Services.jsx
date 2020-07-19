import React, { Component } from 'react';
import WebImg1 from '../images/img13.jpg'
import WebImg2 from '../images/img11.jpg'
import WebImg3 from '../images/img14.jpg'
import WebImg4 from '../images/img9.jpg'
import WebImg5 from '../images/img6.jpg'
import WebImg6 from '../images/img4.jpg'

class Services extends Component {
    render () { 
        return <> 
      <section className="testimonials-wrap bg-contact bg-section"  id="services">
  <div className="sesgoarriba" ></div>
  <div className="container">
  <div className="contenedor">
        <h2 className="title-testimonials wow fadeInUp">OUR Services</h2>
   
  <div className="item green img-responsive">
    <img alt=""src={WebImg1} />
    <i className="fa fa-laptop" />
  </div>
  <div className="item red img-responsive">
    <img alt=""src={WebImg2} />
    <i className="fa fa-laptop" />
  </div>
  <div className="item blue img-responsive">
    <img alt=""src={WebImg3} />
    <i className="fa fa-laptop" />
  </div>
  <div className="item red img-responsive">
    <img alt=""src={WebImg4} />
    <i className="fa fa-laptop" />
  </div>
  <div className="item blue img-responsive">
    <img alt=""src={WebImg5} />
    <i className="fa fa-laptop" />
  </div>
  <div className="item green img-responsive">
    <img alt=""src={WebImg6} />
    <i className="fa fa-laptop" />
  </div>
  
</div></div>


  <div className="sesgoabajo" ></div>
</section>

        </>
    }
}
export default  Services;
