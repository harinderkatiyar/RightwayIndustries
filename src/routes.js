import React, { Component } from 'react';
import ContactUs from '../src/pages/ContactUs';
import Map from '../src/pages/Map';
import Overview from '../src/pages/Overview';
import OurTeam from '../src/pages/OurTeam';
import Services from '../src/pages/Services';

export default class routes extends Component {
    render() {
           return <div>
   <main>
<Overview/>
<Services/>
<OurTeam/>
<ContactUs/>
<Map/>  
</main>

 
 </div>

    }
}
