
import React, { Component } from 'react';
import $ from "jquery";
import WOW from 'wowjs';
import Footer from '../src/pages/Footer';
import Header from '../src/pages/Header';
import ContactUs from '../src/pages/ContactUs';
import Map from '../src/pages/Map';
import Overview from '../src/pages/Overview';
import OurTeam from '../src/pages/OurTeam';

import Services from '../src/pages/Services';
class App extends Component {
 componentDidMount () {

  new WOW.WOW().init();
  document.getElementById('background-video').play();
  $(window).on("scroll", function() {
    if ($(this).scrollTop() > 10) {
        $("nav.navbar").addClass("mybg-dark");
        $("nav.navbar").addClass("navbar-shrink");
    } else {
        $("nav.navbar").removeClass("mybg-dark");
        $("nav.navbar").removeClass("navbar-shrink");
    }
});
}
 render () { 
   return <div><Header/>
   <main>
   <Overview/>
<Services/>
<OurTeam/>
<ContactUs/>
<Map/>
  
</main>

<Footer/>
 
 </div>
 
 }

}
export default App;
