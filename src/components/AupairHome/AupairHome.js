import React ,{ Component} from 'react'
import './AupairHome.css'
import Contacts from '../Navigation/Contacts/Contacts'
import ToolBar from '../Navigation/Toolbar/Toolbar'
import BorderColorIcon from '@material-ui/icons/BorderColor';
import GroupIcon from '@material-ui/icons/Group';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
class Aupair extends Component{
    render() {
        return(
            <div className="Aupair">
                <Contacts />
                <div className="Aupair-panel">           
                <ToolBar />
                <div>
                    <div className="aupair-title">
                        <h3>
                            AKAGERA & RHEIN®
                        </h3>
                        <h1>
                            AUPAIR SERVICE

                        </h1>
                        <br />
                        <div>
                            GET INVOLVED

                        </div>
                    </div>
                    <div className="container-other">
                        <div className="item-aupair">
                            <div > <div className="register1"><BorderColorIcon style={{color:'orange', fontSize:'36px'}}/></div>
                            <div className="register">   <p>Hosting Family</p> <b className="more">Register </b> </div> </div>

                        </div>
                        <div className="item-aupair">
                        <div > <div className="register1"><BorderColorIcon style={{color:'orange', fontSize:'36px'}}/></div>
                            <div className="register">   <p>Hosting Family</p> <b className="more">Register </b> </div> </div>
                            {/* <p>Candidate</p>
                            <div > <b className="more">Register </b> </div> */}
                        </div>
                        <div className="item-aupair">     
                        <div >
                            <div className="register1"><PeopleOutlineIcon style={{color:'orange', fontSize:'36px'}}/></div>
                            <div className="register">  <p>An aupair</p> <b className="more">Find </b> </div> </div>
                            {/* <p>An aupair</p>
                             <b className="more">Find </b>  */}
                        </div>
                        <div className="item-aupair">   
                        <div > <div className="register1"><GroupIcon style={{color:'orange', fontSize:'36px'}}/></div>
                            <div className="register">   <p>Hosting Family</p> <b className="more">Find</b> </div> </div>  
                            {/* <p>Hosting Family</p>
                             <b className="more">Find </b>  */}
                        </div>

                    </div>
                   

                </div>

                </div>
                      
            </div>
        )
}
}
export default Aupair