import React, {Component}from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Aupair from './container/HomeAupair/HomeAupair'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Layout from './hoc/Layout/Layout'

class App extends Component {
   
    render () {
     
        return(
        <div>
          <BrowserRouter>
            <Layout>
                <Switch>
                   
                    <Route path="/aupair" exact component ={Aupair} />
                    <Route path="/" exact component ={Aupair} />
                </Switch>   
            </Layout>
          </BrowserRouter>
        </div>
     )
    }
}
export default App