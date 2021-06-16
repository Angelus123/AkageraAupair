import React,{Component} from 'react'
import Aux from '../Auxi/Auxilliary'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import './Layout.css'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'
import Contacts from '../../components/Navigation/Contacts/Contacts'
class Layout extends Component{
    state = {
        showSideDrawer:false
    }
    sideDrawerClosedHandler = () => {
                this.setState({showSideDrawer: false})

    }

    sideDrawerToggleHandler = () => {
        this.setState( ( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer}
            
        } )
      
    }
    render(){
        return (
            <Aux>
                 <div>
    
        </div>
              
                <SideDrawer 
                    open={this.state.showSideDrawer} 
                    closed ={this.sideDrawerClosedHandler }/>
                <main className ='content1'>
                    {this.props.children}  
                </main>
            </Aux>
   
        )

    }
}

export default Layout