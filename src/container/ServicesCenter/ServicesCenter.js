import React,{ Component } from "react";
import Aux from '../../hoc/Auxi/Auxilliary';
import Layout from './LayoutCenter/Layout'
import Footer from '../../components/Footer/NewFooter'
import ServicesPage from '../../components/Page/Services/Services'
import ServicesFont from '../../components/Page/Services/ServicesFront/ServicesFront'
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



