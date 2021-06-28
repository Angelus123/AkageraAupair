import React from 'react'
import './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
const navigationItems = () => (
<ul className='NavigationItems'>
    <NavigationItem link ="/" exact> <div className="dropdown">
          <span className="language">Home  <ArrowDropDownIcon /></span>
          <div className="dropdown-content">
            <p> What does Aupair  means  </p>
            <p>Benefits for Aupair    </p>
            <p>Aupair duties </p>
            <p>Householf cores</p>
            <p>How to proceed</p>
            <p>Elegibility check</p>
           

 




          </div>
        </div> </NavigationItem>

        <NavigationItem link ="/services" exact> <div className="dropdown">
          <span className="language">Families  <ArrowDropDownIcon /></span>
          <div className="dropdown-content">
            <p> Education Abroad  <ArrowRightIcon/></p>
            <p >Career  Abroad <ArrowRightIcon/> </p>
            <p>Special Services  <ArrowRightIcon/> </p>
            <p>Abroad 
              Interpreter & Translation Services  <ArrowRightIcon/> </p>
            <p>Migration Advisory & Consultancy  <ArrowRightIcon/> </p>

          </div>
        </div> </NavigationItem>
  

    <NavigationItem link ="/about" > <div className="dropdown">
          <span className="language"> About <ArrowDropDownIcon /></span>
          <div className="dropdown-content">
            <p> What does Aupair  means   </p>
            <p>Mission  </p>
            <p>Why Akagera & Rhein®? </p>
            <p>Our Team   </p>
            <p>Our Partners </p>
            <p>Terms of use </p>
          </div>
        </div> </NavigationItem>
    <NavigationItem link ="/contact">Contact</NavigationItem>
    <NavigationItem link ="/involved">Involved</NavigationItem>
    <NavigationItem link ="/faq">FAQ</NavigationItem>
    
  
</ul>
)
export default navigationItems