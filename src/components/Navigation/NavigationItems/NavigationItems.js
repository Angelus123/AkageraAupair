import React from 'react'
import './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
const navigationItems = () => (
<ul className='NavigationItems'>
    <NavigationItem link ="/" exact> <div className="dropdown">
          <span className="language">For Aupair Candidate  <ArrowDropDownIcon /></span>
          <div className="dropdown-content">
            <p>What does Aupair  means  </p>
            <p>Benefits for Aupair    </p>
            <p>Aupair duties </p>
            <p>Householf cores</p>
            <p>How to proceed</p>
            <p>Elegibility check</p>
          </div>
        </div> </NavigationItem>
  

        
  

    {/* <NavigationItem link ="/about" > <div className="dropdown">
          <span className="language"> About <ArrowDropDownIcon /></span>
          <div className="dropdown-content">
            <p> What does Aupair  means   </p>
            <p>Mission  </p>
            <p>Why Akagera & Rhein®? </p>
            <p>Our Team   </p>
            <p>Our Partners </p>
            <p>Terms of use </p>
          </div>
        </div> </NavigationItem> */}
    <NavigationItem link ="/families">
    
    <div className="dropdown">
          
          <span className="language">For Host Families <ArrowDropDownIcon /></span>
          <div className="dropdown-content">
            <p> What is a Host Famiy </p>
            <p>Offer of the Host Family  </p>
            <p>Aupair duties   </p>
            <p>Householde chores  </p>
            <p>What Aupair must not do  </p>
            <p>How to proceed  </p>
            <p>Elegibility check  </p>
          </div>
        </div>
    </NavigationItem>
    {/* <NavigationItem link ="/contact">
    <div className="dropdown">  
          <span className="language">Candidate <ArrowDropDownIcon /></span>
          <div className="dropdown-content">
            <p> Education Abroad  </p>
            <p >Career  Abroad </p>
            <p>Special Services  </p>
            <p>Abroad 
              Interpreter & Translation Services  </p>
            <p>Migration Advisory & Consultancy   </p>

          </div>
        </div>
    </NavigationItem> */}
    {/* <NavigationItem link ="/services" exact> Services </NavigationItem> */}

    <NavigationItem link ="/faq">
    <div className="dropdown">  
          <span className="language">FAQ <ArrowDropDownIcon /></span>
          <div className="dropdown-content">
            <p> General asked questions </p>
            <p >Aupair  asked questions </p>
            <p>Host Family asked questions </p>
          </div>
        </div>
    </NavigationItem>
    <NavigationItem link ="/involved">Involved</NavigationItem>
    <NavigationItem link ="/contact">Contact</NavigationItem>
    
  
</ul>
)
export default navigationItems