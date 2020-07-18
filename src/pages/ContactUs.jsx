import React, { Component } from 'react';

class ContactUs extends Component {
    render () { 
        return <>
          <section className="testimonials-wrap bg-contact bg-section"  id="contact">
    <div className="sesgoarriba" />
    <div className="container">
      <div className="contenedor">
        <h2 className="title-testimonials wow fadeInUp">Contact us</h2>
    
        <div className="container-fluid">
  <h2 className="section-heading mb-4">
             
            </h2>
    <div className="row slideanim">
      <div className="col-md-6 col-sm-6 contact-left">
        <div className="left-box">
          <address className="contact">
            <span className="span-contact">Call:</span>
            <br />
            +091 1234 5678
            <br />
            <span className="span-contact">Email:</span>
            <br />
            
            test@gmail.com
            <br />
            <span className="span-contact">Visit:</span>
            <br />
            294, Focal Point Rd, Phase IV-A,
            <br />
            Urban Estate Phase 1, Focal Point,
            <br />
            Ludhiana, Punjab 141010
          </address>
        </div>
      </div>
      <div className="col-md-6 col-sm-6 contact-right">
        <form
          noValidate
          action="mailto:test@gmmmail.com"
          name="frm"
          method="post"
        >
          <div className="form-group has-feedback">
            <label className="sr-only">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Name"
              required
            />
          </div>
          <div className="form-group has-feedback">
            <label className="sr-only">Phone:</label>
            <input
              type="text"
              name="surname"
              className="form-control"
              placeholder="Phone"
              required
            />
          </div>
          <div className="form-group has-feedback">
            <label className="sr-only">Email:</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
              required
            />
          </div>
          <div className="form-group">
            <label className="sr-only" name="comment" htmlFor="comment">
              Message:
            </label>
            <textarea
              className="form-control"
              rows={5}
              id="comment"
              placeholder="Message"
              defaultValue={""}
            />
          </div>
          <div className=" pull-left">
          <div className="form-group">
                
                    <input
                      type="submit"
                      name="submit"
                      defaultValue="Send"
                      className="btn-login"
                    />
                  </div>
          </div>
        </form>
      </div>
    </div>
  </div>
      </div>
    </div>
    <div className="sesgoabajo" />
  </section>
         </>
    }
}
export default  ContactUs ;