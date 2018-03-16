import React from "react";
import image1 from '../../img/mueble1.jpg';
import image2 from '../../img/mueble2.jpg';
import image3 from '../../img/mueble3.jpg';
import './style.css';



const CenterItem = () => {

  return (
            
            <div className="item-center">
              <div className="img1 img">
                <h3>Ofertas</h3>
                <img  alt={"muebles"}  src={image1}/>
              </div>
              <div className="img2 img">
                <h3>Ofertas</h3>
                <img  alt={"muebles"}  src={image2}/>    
              </div>
              <div className="img3 img">
                <h3>Ofertas</h3>
                <img  alt={"muebles"}  src={image3}/>
              </div>
            </div>

            



  )



}

export default CenterItem;