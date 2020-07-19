import React, { Component } from 'react';
import WebImg1 from '../images/img5.jpg'
import WebImg2 from '../images/img7.jpg'
import WebImg3 from '../images/img8.jpg'
class Overview extends Component {
    render () { 
        return <>
  <section className="overview-wrap" id="overview">
    <div className="container">
      <div className="contenedor">
        <h2 className="title-overview wow fadeInUp">Overview</h2>
        <p className="subtitle-overview wow fadeInUp">
        We “Rightway Industries” are reputed organization engaged in Manufacturing Trading and Supplying high quality range of Three Wheeler Forks Center Pins Shocker Mounting Brackets Three Wheeler Torsion Rod and Three Wheeler Front Suspension. Identified as the market leader in this domain we are registered under the SSI since 1996. Moreover we are also registered under the firms of category A and C. Located at Ludhiana (Punjab India) we are supported by robust infrastructural base that comprises various units such as procuring production quality control R & D sales & marketing transport & logistics. All these units are outfitted with requisite amenities and handled by highly experienced professionals. Our technologically advanced infrastructure makes us capable of manufacturing our offered Forks & Center Pins as per customers’ precise requirements drawing and specifications. In addition to this our flexible payment modes transparent business dealings client-centric approach competitive price range and fair policies have placed our organization at the peak of success in this domain. We are offering our products under the brand name Raak. 
        </p>
        <div className="container">

      {/* banner starts */}
      <div className="slide-one">
        <div id="demo" className="carousel slide" data-ride="carousel">
          {/* Indicators */}
          <ul className="carousel-indicators">
            <li data-target="#demo" data-slide-to={0} className="active" />
            <li data-target="#demo" data-slide-to={1} />
            <li data-target="#demo" data-slide-to={2} />
          </ul>
          {/* The slideshow */}
          <div className="carousel-inner">
            <div className="carousel-item active ">
                <img alt=""  height="400" width ="100%"  src={WebImg1}/>
               <div className="text-box">
            <h2 className="wow fadeInUp" data-wow-duration="2s">This is Airborne text</h2>
            <p className="wow fadeInUp" data-wow-duration="1s">There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space. </p>
        </div>
              
            </div>
            <div className="carousel-item  img-responsive">
                <img alt="" height="400"  width ="100%"  src={WebImg2}    />
                <div className="text-box">
            <h2 className="wow slideInUp" data-wow-duration="2s" >This is samuel text</h2>
            <p className="wow fadeInDown" data-wow-duration="1s">There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space. </p>
        </div>
            </div>
            <div className="carousel-item  img-responsive">
                <img alt="" height="400"  width ="100%"   src={WebImg3}  />
              <div className="text-box">
            <h2 className="wow slideInRight" data-wow-duration="1s">This is Obitope text</h2>
            <p className="wow slideInLeft" data-wow-duration="2s">There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space. </p>
        </div>
             
            </div>
          </div>
          {/* Left and right controls */}
          <a className="carousel-control-prev " href="#demo" data-slide="prev">
            <span className="carousel-control-prev-icon" style={{color:"black"}} />
          </a>
          <a className="carousel-control-next" href="#demo" data-slide="next">
            <span className="carousel-control-next-icon" />
          </a>
        </div>
      </div>
    </div>
  </div>

    
    </div>
  </section>

</>
    }
}
export default  Overview;