import React, { Component } from 'react';
import Gallery from '../pages/Gallery'

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

    <Gallery/>
    </div>
  </div>
    </div>
  </section>

</>
    }
}
export default  Overview;