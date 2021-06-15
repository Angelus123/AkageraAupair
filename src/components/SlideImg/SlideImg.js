import React from 'react'
import './SlideImg.css'
// import './style.css'
import img1 from '../../assets/slideimg/img2.jfif'

const SlideImg = () => {
    return (
        <div className="slideImg">
    
            <figure className="wgh-slider-item-figure"><img className="wgh-slider-item-figure__image" src={img1} alt="The 5th Exotic"/>
                <figcaption className="wgh-slider-item-figure__caption"> 
                    <a href="https://f4.bcbits.com/img/a3905613628_16.jpg"> <strong style={{fontSize:'36px'}}>Akagera & Rhein® Competence</strong> </a>
                    <br />
                    <span style={{fontSize:'18px'}} >
                        Akagera & Rhein® Competence Center brings together people and promotes the cultural understanding through
                           know-how or knowledge exchange and consultance service in the region of Akagera & Rhein river’s regions. 

                          
    
                    </span>

                   
            <div>
            <a href="https://f4.bcbits.com/img/a3905613628_16.jpg">
                <strong style={{fontSize:'36px'}}>Our uniqueness
            </strong> </a>
            <br />

            <span style={{fontSize:'18px'}} >
                        Akagera & Rhein® Competence Center brings together people and promotes the cultural understanding through
                           know-how or knowledge exchange and consultance service in the region of Akagera & Rhein river’s regions. 

                           We value our customers and view each participant as an individual, with their own needs and wishes. 
    
                    </span>
            </div>
            <button > <strong style={{fontSize:'36px' ,borderRadius:'10px', margin:'10px'}}>SUBSCRIBE NEWS LETTER</strong></button>

                        <span style={{fontSize:'18px'}} ></span>
 </figcaption>
            </figure>
        
        </div>
    )
}
export default SlideImg