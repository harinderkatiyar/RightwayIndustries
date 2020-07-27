import React, { Component } from 'react';

class Gallery extends Component {
    render () { 
        return <>  
   {/* banner starts */}
   <div className="float-sm">
  <div className="fl-fl float-pn">
    <i className="fa fa-facebook fa-2x" />
    <a href="/"   >
      {" "}
      Like us!
    </a>
  </div>
  <div className="fl-fl float-tw">
    <i className="fa fa-twitter fa-2x" />
    <a href="/"   >
      Follow us!
    </a>
  </div>
  <div className="fl-fl float-gp">
    <i className="fa fa-google-plus fa-2x" />
    <a href="/"  >
      Recommend us!
    </a>
  </div>
  <div className="fl-fl float-rs">
    <i className="fa fa-whatsapp fa-2x" />
    <a href="https://wa.me/917888429218"   >
      Connect us!
    </a>
  </div>
  <div className="fl-fl float-ig">
    <i className="fa fa-instagram fa-2x" />
    <a href="/"   >
      Follow us!
    </a>
  </div>
  </div>
         </>
    }
}
export default  Gallery;