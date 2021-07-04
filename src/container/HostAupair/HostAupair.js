import React,{ Component } from "react";
import Aux from '../../hoc/Auxi/Auxilliary';
import Layout from './LayoutCenter/Layout'
import Footer from '../../components/Footer/NewFooter'
import Duties from '../../components/AupairDuties/Duties'
import HouseHold from '../../components/AupairHouseHold/Cores'
import HeaderPic from '../../components/Page/Host/HeaderPic/HeaderPic'
import NotApart from '../../components/Page/Host/HostNotApart/Apart'
import TaskPartt from '../../components/Page/Host/TaskApart/Task'
import ServicesPage from '../../components/Page/Host/Host'
import ServicesFont from '../../components/Page/Host/HostFront/HostFront'
class Home extends Component{
  
  render(){
  
        return (   
        <Aux>
            <Layout>
                <ServicesFont />
                <HeaderPic />
                <ServicesPage />
               
                {/* <Services /> */}
                <Duties />
                <HouseHold />
                <NotApart />
                <TaskPartt />
               
                <Footer />
            </Layout>
         </Aux>
        )
    }
}
export default Home



