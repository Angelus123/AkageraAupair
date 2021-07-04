import React from 'react'
import './HeaderPic.css'
import { Link} from 'react-router-dom'
const HeaderPic =(props)=>{
return(
    <div className="header-pic"> 
        <div className="header-pic-container">
        
                <div className="host-header-pic-item">
                <Link to = "/">  <img src="https://cdn.pixabay.com/photo/2017/02/16/23/10/smile-2072908_960_720.jpg" alt="Aupair"/></Link> 
                <Link to = "/"><p> GET STARTED AS AN AUPAIR</p></Link> 
                </div>
           
           
           <div className="host-header-pic-item--1">
            
        <img src="https://cdn.pixabay.com/photo/2017/10/03/01/12/family-2811003_960_720.jpg" alt="Host Family"/>
                <p> GET STARTED FOR HOST FAMILY</p>    
            </div>
        
            
        </div>
        
    </div>
    
)
}
export default HeaderPic 