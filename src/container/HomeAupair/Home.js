import React,{ Component } from "react";
import Aux from '../../hoc/Auxi/Auxilliary';
import OurStory from '../../components/OurStory/OurStory';
import Aupair from '../../components/AupairHome/AupairHome'
import Services from '../../components/OurTeam/Benefit'
import Footer from '../../components/Footer/NewFooter'

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
