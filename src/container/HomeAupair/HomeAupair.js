import React,{ Component } from "react";
import Aux from '../../hoc/Auxi/Auxilliary';
import OurStory from '../../components/OurStory/OurStory';
import OurUniqueness from '../../components/OurUniqueness/OurUniqueness'
import WhyAkagera from '../../components/WhyAkagera/WhyAkagera';
import Footer from '../../components/Footer/Footer'
import Center from '../../components/AupairCenterAcademy/AupairCenterAcademy'
import OurTeam from "../../components/OurTeam/OurTeam";

class Home extends Component{
  
  render(){
  
        return (   
        <Aux>
            <Center />
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
