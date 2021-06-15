import React from 'react'
import './WhyAkagera.css'
// import './style.css'
import img1 from '../../assets/whyIcon/Picture1.png'
import img2 from '../../assets/whyIcon/Picture2.png'
import img3 from '../../assets/whyIcon/Picture3.png'


const WhyAkagera = () => {
    return (
        <div className="why-akagera">
            <h1>Why  Akagera & Rhein® Competence Center ?
            </h1>
            <br />
            <div className="why-akagera-item">
            <div className="title-why">Proficiency</div>

            <div className="image-why-holder"><img className="image-why" src={img1} Alt="proficiency" /></div>
                <p>
                Experts found Akagera & Rhein® Competence Center 
                Our advisors who are professional qualified and experts with a huge of
                experience know the country's laws and regulations. We do our job impeccably.
                The combination of our innovative tech-oriented solutions and human expertise
                </p>
                <div className="button-why">More</div>

            
            </div>

            <div className="why-akagera-item">
            <div className="title-why">Ability</div>
            <div className="image-why-holder"> <img className="image-why" src={img2} Alt="Ability" /></div>
               <p>
                Competence, performance and efficiency: 
                The complementarity of these three values constitutes the indelible mark of Akagera & 
                Rhein® Competence Center. Driven by the satisfactory results of our customers, our values enlighten us, 
                towards the perfection and optimization of our product.
                </p>
              
                <div className="button-why">More</div>
                
            </div>


            <div className="why-akagera-item">
            <div className="title-why"> Clients first </div>
                <div className="image-why-holder"> <img className="image-why" src={img3} Alt="Client first" /> </div>
               <p>
                The process of applying for an admission, application to an international career
                can be long or complicated and a rejection can lead to immeasurable disappointment
                and frustration. The lack of information of opportunity, limited knowledge of
                requirements and standards
                </p>
               
                <div className="button-why">More</div>
              
         
            </div>

         

        </div>



         
       
    )
}
export default WhyAkagera