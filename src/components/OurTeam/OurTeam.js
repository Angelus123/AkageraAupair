import React from 'react'
import './OurTeam.css'

import img1 from '../../assets/OurTeam/Picture1.png'
import img2 from '../../assets/OurTeam/Picture2.png'
import img3 from '../../assets/OurTeam/Picture3.png'


const OurTeam = () => {
    return (
        <div className="Our-team">
            <h1>Our Team
            </h1>
            <br />
            <div className="Our-team-item-top">
            <div className="title-why">Check your elegibity 
</div>

            <div className="image-why-holder"><img className="image-why" src={img1} Alt="proficiency" /></div>
          
            Our Center assesses  your personal situationfree of
             charge using our digital-automated assessment instrument.
             To check is you are eligible on one of our programms.

                <br />
                <div className="button-why">More</div>

            
            </div>

            <div className="Our-team-item-left">
            <div className="title-why">Choose a Service
            </div>
            <div className="image-why-holder"> <img className="image-why" src={img2} Alt="Ability" /></div>
               
                
                There are different types of Services  our Center offers. Every type of service has its specific conditions 
                Bevore you apply for a specific programm  you need to know wich type of  programm is  suitibale ...

                <br />
                <div className="button-why">More</div>
               
            </div>


            <div className="Our-team-item-right">
            <div className="title-why"> Complete the 
application form
 </div>
                <div className="image-why-holder"> <img className="image-why" src={img3} Alt="Client first" /> </div>
               
                    Fillful the application form by giving the right  and 
                    correct answers. In case of confusion our support team
                    will guide you. Please hesitate to contact  our support 
                    team in order to avoid unecessary errors.

                <br />
                <div className="button-why">More</div>
              
         
            </div>

            <div className="Our-team-item-bottom">
            <div className="title-why"> Documents review  </div>
                <div className="image-why-holder"> <img className="image-why" src={img3} Alt="Client first" /> </div>
                 When submitting an application of participation on a specific programm  you often need to send some support documents. We advice our customer to go trought the generated check liste
                 and upload the listed documents to reviewed by our staffs. .
                <br />
                <div className="button-why">More</div>
              
         
            </div>

         

        </div>



         
       
    )
}
export default OurTeam