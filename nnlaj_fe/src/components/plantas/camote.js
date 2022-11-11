import React from 'react'
import "./plantas.css";
import camote from "../../images/camoteImage.jpg";
import fondo from "../../images/image.jpg";
// git merge


function Camote() {
  return (
    <div className='main' >
      <img src={fondo} alt="Fondo" width="100%" height="100%" />
      <div className='informacion'>
        <div >
          <div className="planta1">
            Camote
          </div>
          <div className="titulo">
            Descripcion
          </div>
          <div className="texto">
            Lorem ipsum dolor sit amet consectetur adipiscing, elit interdum elementum dui laoreet purus torquent, ullamcorper nostra at morbi himenaeos. Vestibulum proin ornare nibh cursus porttitor volutpat ad, fames aenean dictumst praesent facilisis per placerat curae, habitasse suscipit nulla vulputate nec lacus.
          </div>
          <div className="titulo">
            cultivo
          </div>
          <div className="texto">
            Lorem ipsum dolor sit amet consectetur adipiscing, elit interdum elementum dui laoreet purus torquent, ullamcorper nostra at morbi himenaeos. Vestibulum proin ornare nibh cursus porttitor volutpat ad, fames aenean dictumst praesent facilisis per placerat curae, habitasse suscipit nulla vulputate nec lacus.
          </div>
          <div className="titulo">
            cuidados
          </div>
          <div className="texto">
            Lorem ipsum dolor sit amet consectetur adipiscing, elit interdum elementum dui laoreet purus torquent, ullamcorper nostra at morbi himenaeos. Vestibulum proin ornare nibh cursus porttitor volutpat ad, fames aenean dictumst praesent facilisis per placerat curae, habitasse suscipit nulla vulputate nec lacus.
          </div>
          <div className="titulo">
            recomendaciones
          </div>
          <div className="texto">
            Lorem ipsum dolor sit amet consectetur adipiscing, elit interdum elementum dui laoreet purus torquent, ullamcorper nostra at morbi himenaeos. Vestibulum proin ornare nibh cursus porttitor volutpat ad, fames aenean dictumst praesent facilisis per placerat curae, habitasse suscipit nulla vulputate nec lacus.
          </div>
          <div className="titulo">
            reproduccion
          </div>
          <div className="texto">
            Lorem ipsum dolor sit amet consectetur adipiscing, elit interdum elementum dui laoreet purus torquent, ullamcorper nostra at morbi himenaeos. Vestibulum proin ornare nibh cursus porttitor volutpat ad, fames aenean dictumst praesent facilisis per placerat curae, habitasse suscipit nulla vulputate nec lacus.
          </div>
        </div>
      </div>
      <div className='imagenplanta'>
        <div align="center" className="fondo ">
          <img src={camote} alt="" width="80%" />
        </div>
      </div>

    </div>
  )
}

export default Camote
 


