import React,{ Component } from "react";
import Aux from '../../hoc/Auxi/Auxilliary';
import Layout from './LayoutCenter/Layout'
import Footer from '../../components/Footer/NewFooter'
import ServicesPage from '../../components/Page/Host/Host'
import ServicesFont from '../../components/Page/Host/HostFront/HostFront'
class Home extends Component{
  
  render(){
  
        return (   
        <Aux>
            <Layout>
                <ServicesFont />
                <ServicesPage />
                <Footer />
            </Layout>
         </Aux>
        )
    }
}
export default Home



