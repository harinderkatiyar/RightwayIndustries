import React, { Component } from 'react';
class ContactUs extends Component {
//   constructor(props){
//     super(props)
//     this.state={
//       fullName:'null',
//       phone:'null',
//       email:'null',
//       message:'null',
         
//     }
//   }
//   handleSubmit =(event) =>{
//     event.preventDefault();
//     const data = this.state
//     console.log("final data is ",data);

//     axios.post('/api/form',data).then(res=>{
//       this.setState({
//         sent:true
//       },this.resetForm())
//     }).catch((e)=>{
//       console.log(`Message is not sent${e}`);
//     })
//   }
//   resetForm=()=>{
//     this.state({
//       fullName:'',
//       phone:'',
//       email:'',
//       message:''   
//     })
//     setTimeout(()=>{this.setState({
//       sent:false
//     })
//   },3000)
// }

// handleInputChange=(event)=>{
// event.preventDefault();
// console.log(event);
// console.log(event.target.name);
// console.log(event.target.value);
// this.setState({
//   [event.target.name]:event.target.value
// })
//   }
render () { 
//  const {fullname} = this.state
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
                        <a style= {{color:"white"}}href="tel: +091 1234 5678"> +091 1234 5678</a>
                        <br />
                        <span className="span-contact">Email:</span>
                        <br />
                        <a style= {{color:"white"}}href="mailto:rigthwayindustires@gmail.com">rigthwayindustires@gmail.com</a>
                        
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
               <div className="carrier"> <div className="wrap">
  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=email@domain.com" title="Click Here" rel="noopener">
    <div className="circle">
      <div className="envelope-top"></div>
      <div className="envelope"></div>
    </div>
  </a>
</div></div>
                  {/* <form
                     onSubmit={this.handleSubmit}
                   //  action="mailto:test@gmmmail.com"
                    // name="frm"
                     method="post"
                     >
                     <div className="form-group has-feedback">
                        <label className="sr-only">Name:</label>
                        <input
                           type="text"
                           name="fullName"
                          
                           className="form-control"
                           placeholder="Name"
                            onChange={this.handleInputChange}
                           required
                           />
                     </div>
                     <div className="form-group has-feedback">
                        <label className="sr-only">Phone:</label>
                        <input
                           type="tel"
                           name="phone"
                           className="form-control"
                           placeholder="Phone"
                           pattern="^\d{10}$"
                           onChange={this.handleInputChange}
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
                           onChange={this.handleInputChange}
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
                           name="message"
                           onChange={this.handleInputChange}
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
                  </form> */}
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