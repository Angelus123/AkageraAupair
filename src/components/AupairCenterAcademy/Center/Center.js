import React from 'react'
import CenterPic from '../../../assets/CenterFoto/pexels-thirdman-5684449.jpg'
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import './Center.css'
const Aupair = () => {
    return (
    

<div className="item item--2">
  <div class="image1">
    <div className="wgh-slider-item__inner">
      <figure className="wgh-slider-item-figure">
      <img className="wgh-slider-item-figure__image" src={CenterPic} alt="The 5th Exotic"/>

        <figcaption className="wgh-slider-item-figure__caption"><a className="aupair-link" href="https://f4.bcbits.com/img/a3905613628_16.jpg">
          Akagera & Rhein® Center
        </a><span>Visit Website <OpenInNewIcon /> <i class="fa fa-external-link" aria-hidden="true"></i></span></figcaption>
      </figure>
      <label className="wgh-slider-item__trigger" for="slide-1" title="Show product 1"></label>
    </div>
       
  </div>
</div>

       
    )
}
export default Aupair