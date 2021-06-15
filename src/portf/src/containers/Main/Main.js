import React,{ Component } from "react";
import Header from "../../components/Header/Header"
import Hello from "../../components/Hello/Hello";
import About from "../../components/About/About";
import axios from '../../axios'
import Aux from '../../hoc/Auxi/Auxilliary'
import withErrorHandler from '../../hoc/withErrorHAndler/withErrorHandler'

class BuggerBuilder extends Component{
  
    state = {
        ingredients:null,
        totalPrice: 4,
        purchasable:false,
        purchasing:false,
        loading: false
    }
    componentDidMount(){
    }
    render(){
       
        return (
            <Aux>
               <div>
{/* <!-- ======= Mobile nav toggle button ======= --> */}
                   
<Header />

                {/* <!-- ======= Hero Section ======= --> */}
                            <Hello /> {/*??? */}
                {/* <!-- End Hero -- > */}

                    <main id="main">

{/* <!-- ======= About Section ======= --> */}
                   <About />
{/* <!-- End About Section --> */}

                     
    {/* <!-- End Facts Section --> */}

                        
{/* <!-- End Contact Section --> */}
{/* <!-- ======= Footer ======= --> */}
  <footer id="footer">
    <div className="container">
      <div className="copyright">
        &copy; Copyright <strong><span>IZERE Ange Felix</span></strong>
      </div>
      <div className="credits">
        {/* <!-- All the links in the footer should remain intact. --> */}
        {/* <!-- You can delete the links only if you purchased the pro version. -->
        <!-- Licensing information: https://bootstrapmade.com/license/ -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/ --> */}
        Designed by <a href="https://www.github.com/Angelus123">Izere Ange Felix</a>
      </div>
    </div>
  </footer>
  {/* <!-- End  Footer --> */}

                    
                    </main>
            </div> 
            </Aux>
        )
    }
}
export default withErrorHandler(BuggerBuilder,axios)