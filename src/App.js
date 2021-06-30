import React, {Component}from 'react'
import './App.css'
import Home from './container/HomeAupair/Home'
import About from './container/AboutAupair/AboutCenter'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Host from './container/HostAupair/HostAupair'

import Contact from './container/ContactAupair/ContactCenter'
import Faq from './container/FaqAupair/FaqCenter'
import GetInvolved from './container/GetAupair/GetCenter'


class App extends Component {
   
    render () {
     
        return(
        <div>
          <BrowserRouter>
           
                <Switch>
                    <Route path="/" exact component ={Home} />
                    <Route path="/about" exact component ={About} />
                    <Route path="/families" exact component ={Host} />
                    <Route path="/contact" exact component ={Contact} />
                    <Route path="/involved" exact component ={GetInvolved} />
                    <Route path="/faq" exact component ={Faq} />  
                 
                </Switch>   
           
          </BrowserRouter>
        </div>
     )
    }
}
export default App