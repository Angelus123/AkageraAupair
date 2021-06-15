import React from 'react'
import './Footer.css'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
// import './style.css'



const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-cover">
                <div className="footer-item"> 
                <div className="footer-text"> <h3>Quick Links </h3></div>
                        <div className="footer-text">
                        Terms & Conditions
                        </div>
                        <div className="footer-text">
                        Privacy Policy
                        </div>
                        <div className="footer-text">
                        Data Declaration for Customers
                        </div>

                        <div className="footer-text">
                        Privacy Policy
                        </div>
                        <div className="footer-text">
                        Data Declaration for Customers
                        </div>
                        <div className="footer-text">
                        Data Declaration for Customers
                        </div>
                       
                </div>

                <div className="footer-item"> 
                <div className="footer-text"> <h3>Quick Links </h3></div>
                        <div className="footer-text">
                        Check your Eligibity 
                        </div>
                        <div className="footer-text">
                        Education Abroad 

                        </div>
                        <div className="footer-text">
                        Career  Abroad

                        </div>
                        <div className="footer-text">
                        Special Services 

                        </div>
                        <div className="footer-text">
                        Interpreter 

                        </div>
                        <div className="footer-text">
                        Migration Advisory 


                        </div>


                        
                </div>


                <div className="footer-item"> 
                <div className="footer-text"> <h3>Quick Links </h3></div>
                        <div className="footer-text">
                        Akagera & Rhein
                        </div>
                        <div className="footer-text">
                        Akagera & Rhein®

                        </div>
                        <div className="footer-text">
                        Akagera & Rhein

                        </div>
                        <div className="footer-text">
                        Akagera & Rhein

                        </div>
                        <div className="footer-text">
                        Akagera & Rhein

                        </div>
                        <div className="footer-text">
                        Akagera & Rhein® 

                        </div>
                        
                </div>
               

                <div className="footer-bottom-social">
            
                    <InstagramIcon />
                    <WhatsAppIcon />
                    <TwitterIcon />
                    <FacebookIcon />
                    <YouTubeIcon />
                    <LinkedInIcon />
                    <SubscriptionsIcon />

                    <br />
                   
                </div>
             
    
                <div className="footer-bottom">
                    © 2021 Akagera & Rhein® Competence Center
                </div>
               
            </div>
        
            <div className="footer-bottom">

 
            </div>
        </div>



         
       
    )
}
export default Footer