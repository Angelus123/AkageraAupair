import React from 'react'
import './Contacts.css'
import CallIcon from '@material-ui/icons/Call';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
const Contacts = () => (
    <div className='Contacts'>
     
        <div className="Tel">
            <CallIcon style={{fontSize:'15px'}}/>+250787259588
        </div>
        <div className="Email">
            <MailOutlineIcon style={{fontSize:'17px'}}/>info@akagerarhein.com
        </div>
        <div className="Login">
           Login
        </div>
        <div className="Register1">
            Register
        </div>

    </div>

)
export default Contacts