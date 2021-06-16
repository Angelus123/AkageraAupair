import React,{ Component } from "react";
import Aux from '../../hoc/Auxi/Auxilliary';
import OurStory from '../../components/OurStory/OurStory';
import OurUniqueness from '../../components/OurUniqueness/OurUniqueness'
import WhyAkagera from '../../components/WhyAkagera/WhyAkagera';
import Footer from '../../components/Footer/Footer'
import Aupair from '../../components/AupairHome/AupairHome'
import OurTeam from "../../components/OurTeam/OurTeam";

class Home extends Component{
  
  render(){
  
        return (   
        <Aux>
            <Aupair />
            <OurStory />
            <WhyAkagera />
            <OurUniqueness />
            <OurTeam />
            <Footer />
            
        
         </Aux>
        )
    }
}
export default Home
