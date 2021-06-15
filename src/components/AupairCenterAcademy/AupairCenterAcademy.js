import React from 'react';
import Aupair from './Aupair/Aupair'
import Academy from './Academy/Academy'
import './AupairCenterAcademy.css'
import Center from './Center/Center'
import Aux from  '../../hoc/Auxi/Auxilliary'
const CenterAupairAcademy = () => {
 
        return (
      
          <Aux>
              <div className="container-aupair">
              <Aupair />  
              <Academy />
              <Center />
            
            </div>
          </Aux>
         
          
             
  
      )
  }
  export default CenterAupairAcademy
 


                


    
