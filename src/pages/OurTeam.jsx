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
         return <OurTeamCard key={i} teamProPic={val.image} teamName={val.text}/>
         })
       }
       
      </ul>
    </div>
  </section>
    </>
    }
}
export default  OurTeam;