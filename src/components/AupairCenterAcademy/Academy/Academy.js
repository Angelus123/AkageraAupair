import React from 'react'
import AcademyPic from '../../../assets/AcademyFoto/pexels-fauxels-3184163.jpg'
import OpenInNewIcon from '@material-ui/icons/OpenInNew';


import './Academy.css'
import Aux from '../../../hoc/Auxi/Auxilliary'

const Academy = () => {
    return (
        <Aux>

<div className="item item--3">
<div class="image1">
<div className="wgh-slider-item__inner">
              <figure className="wgh-slider-item-figure">
              <img className="wgh-slider-item-figure__image" src={AcademyPic} alt="Language Academy"/>

                <figcaption className="wgh-slider-item-figure__caption"><a className="academy-link" href="https://f4.bcbits.com/img/a3905613628_16.jpg">
                  Akagera & Rhein® Academy
                </a><span>Visit Website<OpenInNewIcon /> <i class="fa fa-external-link" aria-hidden="true"></i></span></figcaption>
              </figure>
              <label className="wgh-slider-item__trigger" for="slide-1" title="Show product 1"></label>
            </div>
       
      </div>
  </div>

        </Aux>
    )
}
export default Academy