import {React,  Component }from 'react'
import './GetInvolved.css'
// import './style.css'


class InvolvedAkagera extends Component {
    state={
        isOpen: false,
        btnOpen:'more'
    }
    openHandler= () =>{
        const less=this.state.isOpen
       
        this.setState({isOpen:!less})
        console.log(less);
        if(!less)
            this.setState({btnOpen:'less'})  
        else
        this.setState({btnOpen:'more'})  
    }
    render(){
        return (
            <div className="involved-akagera">

                <h1>Involved Akagera&Rheign </h1>
                <br />
               
     
                <div className="involved-akagera-item">
                <div className="title-involved">Get Involved Akagera&rhein Services</div>
                <div className="image-involved-holder"> 
                <img className="image-involved" src="https://cdn.pixabay.com/photo/2016/11/08/05/08/adult-1807500_960_720.jpg" Alt="Ability" /> 
                <p className="involved">
                   Work with us 
                    As an individual (As a Mentor/Coach, As a volunteer, As a host, as a cultural guide) 
                    As a professional (Tourist Guide, language teacher, interpreter and translator, Migration’s advisor, business expert, Lawyer, other expertise) 
                    As a private company (education, Health, hospitality, technic,
                  {this.state.isOpen ?
                    <span>  
                        & technology, agriculture, culture and sport, others) 
                        As a public Institution (education, Health, hospitality, technic, & technology, agriculture, culture and sport, others) 
                        As an Institution (Embassy, Consulate, Education other government institution, international institution, others) 
                        As an organisation (Association, cooperative, NGO, church, syndicate, others) 
                    </span>:null }
                     <br />
                    <div className="button-involved" onClick={this.openHandler}>{this.state.btnOpen}</div>
                    </p>
    
                
                </div>
                  
                </div>
    
            </div>
    
    
    
             
           
        )
    }
   
}
export default InvolvedAkagera