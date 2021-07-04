import React,{ Component } from "react";
import Aux from '../../hoc/Auxi/Auxilliary';
import OurStory from '../../components/OurStory/OurStory';
import Aupair from '../../components/AupairHome/AupairHome'
// import Services from '../../components/OurTeam/Benefit'
import Duties from '../../components/AupairDuties/Duties'
import HouseHold from '../../components/AupairHouseHold/Cores'
import HeaderPic from '../../components/HeaderPic/HeaderPic'
import NotApart from '../../components/NotApart/Apart'
import TaskPartt from '../../components/TaskApart/Task'
import Footer from '../../components/Footer/NewFooter'

class Home extends Component{
  
  render(){
  
        return (   
        <Aux>
            <Aupair />
            <HeaderPic />
            <OurStory />
            {/* <Services /> */}
            <Duties />
            <HouseHold />
            <NotApart />
            <TaskPartt />
            <Footer />
         </Aux>
        )
    }
}
export default Home
