import React from 'react'
import './HeaderPic.css'
import { Link} from 'react-router-dom'
const HeaderPic =(props)=>{
return(
    <div className="header-pic"> 
        <div className="header-pic-container">
        
                <div className="header-pic-item">
                        <img src="https://cdn.pixabay.com/photo/2017/02/16/23/10/smile-2072908_960_720.jpg" alt="Aupair"/>
                        <p> GET STARTED AS AN AUPAIR</p>
                </div>
           
           
           <div className="header-pic-item--1">
            
           <Link to = "/families"><img src="https://cdn.pixabay.com/photo/2017/10/03/01/12/family-2811003_960_720.jpg" alt="Host Family"/></Link> 
                <Link to = "/families"><p> GET STARTED FOR HOST FAMILY</p>    </Link> 
            </div>
        
            
        </div>
        
    </div>
    
)
}
export default HeaderPic 