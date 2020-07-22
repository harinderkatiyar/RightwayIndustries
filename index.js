const express = require('express');
const bodyparser =require('body-parser');
const nodemailer = require("nodemailer");
const app =express();


app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}));

app.post('/api/form',(req,res)=>{
    console.log(req.body);
    const transporter =   nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
          user: 'df1806@gmail.com',
          pass: 'fdf'      }
        });
        
        const mailOptions = {
          from: 'fdf@gmail.com',
          to: 'fdf@gmail.com',
        subject: 'Rigthway Industries | Contact Us',
        html: `<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<title>Rigthway Industries</title>
    </head>
    <style type="text/css"></style>
<body>
<div class="container">
  
  <table class="table">
  <tr>
 	<td  bgcolor="#503eff"  align="center" style="padding: 10px 10px 0px 10px;">
 		<table border="0" cellpadding="0" cellspacing="0" width="480" >
 			<tr>
 			<td bgcolor="#3dce8c" align="left" valign="top" style="padding: 20px 30px 20px 30px; border-radius: 4px 4px 0px 0px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 20px;">
 					<h3 style="font-size: 18px; font-weight: 700; margin: 0; color: white; line-height:22px; letter-spacing: 1px;"><p style="text-align: center;
           text-decoration: underline;
           font-family: serif;
           font-size: x-large;">Rigthway Industries</p>Someone has contacted you, the details are mentioned below:</h3>
 				</td>
 			</tr>
 		</table>
 	</td>
 </tr>
 <tr style="margin-top:1%">
 	<td   bgcolor="#503eff"align="center" style="padding: 0px 10px 10px 10px;">
 		<table  border="0" cellpadding="0" cellspacing="0" width="480" >
 			<tr> 
 				<td bgcolor="#ffffff" align="left" style="padding: 10px 30px 10px 30px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 20px;">
 					<p>Name:<br><span style="color: #5599ff"> ${req.body.fullName?req.body.fullName:"N/A"}</span></p>
 					<p>Email:<br> <span style="color: #5599ff">${req.body.email?req.body.email:"N/A"}</span></p>
 					<p>Phone Number:<br> <span style="color: #5599ff">${req.body.phone?req.body.phone:"N/A"}</span></p>
 					<p>Query:<br> <span style="color: #5599ff">${req.body.message?req.body.message:"N/A"}</span></p>
 				</td> 
 			</tr>
 		</table>
 	</td>
 </tr>

</table>
  
  </div>
</body>`
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
})
const PORT = process.env.PORT || 3001

app.listen(PORT,()=>{
    console.log(`server Listing Port is${PORT}`);
})