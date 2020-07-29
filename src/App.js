import React, { Component } from 'react';
import $ from "jquery";
import WOW from 'wowjs';
import Footer from '../src/pages/Footer';
import Header from '../src/pages/Header';
// import ContactUs from '../src/pages/ContactUs';
// import Overview from '../src/pages/Overview';
// import OurTeam from '../src/pages/OurTeam';
// import Services from '../src/pages/Services';
import Routes from '../src/routes';
import { BrowserRouter,Switch, Route } from 'react-router-dom';

class App extends Component {
  componentDidMount () {
    new WOW.WOW().init();
  //   document.getElementById('background-video').play();
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
  return(<>
  <BrowserRouter>
  <Header />
  <main>
  <Switch>
      <Route path='/' exact component={Routes}/>
      {/* <Route path='#/overview' component={Overview}/>
      <Route path='#/about' component={Services}/>
      <Route path='#/service'  component={OurTeam}/>
      <Route path='#/contact'  component={ContactUs}/> */}

      {/* <Redirect to="/"></Redirect> */}
  </Switch>
  </main>

  <Footer/>
  </BrowserRouter>
</>)

 }

}
 
export default App;
