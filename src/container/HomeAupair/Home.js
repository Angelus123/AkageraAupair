import React,{ Component } from "react";
import Aux from '../../hoc/Auxi/Auxilliary';
import OurStory from '../../components/OurStory/OurStory';
import Aupair from '../../components/AupairHome/AupairHome'
import Services from '../../components/OurTeam/Services'
import Footer from '../../components/Footer/Footer'

class Home extends Component{
  
  render(){
  
        return (   
        <Aux>
            <Aupair />
            <OurStory />
            <Services />
            <Footer />
         </Aux>
        )
    }
}
export default Home
