import React, { Component } from 'react';
import MyCardData from './ServiceCardData';
import CardImg from './ServiceCardImg';

class Services extends Component {
    render () { 
        return <> 
      <section className="testimonials-wrap bg-contact bg-section"  id="services">
  <div className="sesgoarriba" ></div>
  <div className="container">
  <div className="contenedor">
        <h2 className="title-testimonials wow fadeInUp">OUR Services</h2>
       { 
       MyCardData.map((val,i)=>{
        
        return <CardImg key={i} imsc={val.image} imsecTitle={val.text} imsecColor={val.color}/>
       })
      } 

    {/*
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
  </div> */}
  
</div></div>


  <div className="sesgoabajo" ></div>
</section>

        </>
    }
}
export default  Services;
