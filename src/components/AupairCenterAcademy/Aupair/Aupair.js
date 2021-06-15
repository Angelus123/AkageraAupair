import React from 'react'
import './Aupair.css'
import AupairPic from '../../../assets/AupairFotos/pexels-kamaji-ogino-5093684.jpg'
import CenterPic2 from '../../../assets/CenterFoto/pexels-alexander-suhorucov-6457579.jpg'
import CenterPic3 from '../../../assets/CenterFoto/pexels-rfstudio-3810758.jpg'

import Aux from '../../../hoc/Auxi/Auxilliary'
// import './style.css'
// import img1 from '../../../assets/slideimg/img2.jfif'

const Center= () => {
    return (
        <Aux>
<div className="item item--1">
<div id="slider">
<div class="slides">
    <div class="slider">
      <div class="legend"></div>
      <div class="content">
        <div class="content-txt">
          <h1>Akagera & Rhein® Competence Aupair</h1>
          <h2>Ou Pair program 

            The term "au pair" is derived from the French "au pair", which means "mutual". 
            An au pair decides to go abroad with the aim of improving the language skills 
            of the host country, in some cases even learning new things.  </h2>
          <button className="Center">Get Started</button>
        </div>
      </div>
      
      <div class="image">
        <img src={AupairPic} alt="pic1"/>
      </div>
    </div>
    <div class="slider">
      <div class="legend"></div>
      <div class="content">
      <div class="content-txt">
          <h1>Akagera & Rhein® Competence Aupair</h1>
          <h2>Our main activities consist to train our customers in communication skills by setting up school of spoken languages in our area of activities such as: German, 
            French, Kinyarwanda, Swahili, and much more other regional languages by request. </h2>
          <button className="Center">Get Started</button>
        </div>
      </div>
      <div class="image">
        <img src={CenterPic2} alt="pic2"/>
      </div>
    </div>
    <div className="slider">
      <div class="legend"></div>
      <div class="content">
      <div class="content-txt">
          <h1>Akagera & Rhein® Competence Center</h1>
          <h2>Our main activities consist to train our customers in communication skills by setting up school of spoken languages in our area of activities such as: German, 
            French, Kinyarwanda, Swahili, and much more other regional languages by request. </h2>
          <button className="Center">Get Started</button>
        </div>
      </div>
      <div class="image">
        <img src={CenterPic3} alt="pic3"/>
      </div>
    </div>
   
    </div>
  </div>
  </div>
        </Aux>
    )
}
export default Center