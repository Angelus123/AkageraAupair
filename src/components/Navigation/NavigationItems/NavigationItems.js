import React from 'react'
import './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'
const navigationItems = () => (
<ul className='NavigationItems'>
    <NavigationItem link ="/" exact>Home</NavigationItem>
    <NavigationItem link ="/Orders">Services</NavigationItem>
    <NavigationItem link ="/About">About</NavigationItem>
    <NavigationItem link ="/Booking">Booking</NavigationItem>
    <NavigationItem link ="/Contact">Contact</NavigationItem>
    <NavigationItem link ="/Involved">Get involved</NavigationItem>
    <NavigationItem link ="/FAQ">FAQ</NavigationItem>
    
  
</ul>
)
export default navigationItems