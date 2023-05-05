// This file is how to create own or user define component 
import React from "react";

const bookingimg= "./external_style_demoapp/assets/images/ap_01.png"
function External()
{
    return (
        <>
            {/* <h1>Hello I'm Bhavika Vasani</h1> */}
            <section className="main-section">
                <div className="left-content">
                    <h1 style={{lineHeight:"2",fontFamily:"cursive",color:"#F33A6A"}}>Make Your Appointment</h1>
                    <hr align="left" />
                    <img src={bookingimg} alt="Appointmentimg01" title="book Appointment" />
                </div>
                <div className="right-content">
                    <h1 style={{width:"65%",lineHeight:"2",fontFamily:"cursive",color:"#FFF",backgroundColor:"#F33A6A",padding:"2px"}}>Appointment Form</h1>
                    
                    <form method="get">
                        <label for="name">Name <span style={{color:"red"}} >*</span> &nbsp;</label>
                        <input type="text" name="name" placeholder="Enter Your Name Here *" /><br /><br />

                        <label for="email">E-mail <span style={{color:"red"}} >*</span> &nbsp;</label>
                        <input type="email" name="email" placeholder="Enter Your Email Here *" /><br /><br />

                        <label for="phone">Phone <span style={{color:"red"}} >*</span> &nbsp;</label>
                        <input type="text" name="phone" placeholder="Enter Phone Number Here *" /><br /><br />
                        
                        <label for="appt-date">Date:  &nbsp;</label>
                        <input type="date" /> &nbsp;&nbsp;&nbsp;
                        <label for="appt-time">Time:  &nbsp;</label>
                        <input type="time" id="appt-time" name="appt-time" />
                        <br /><br />

                        <label for="comment">Comments <span style={{color:"red"}} >*</span> &nbsp;</label>
                        <textarea name="comments">comments</textarea> <br /><br />
                        <input type="submit" />
                        <input type="reset"  />
                        
                    </form>
                </div>
            </section>
        </>
    )
}

export default External;
