import React from 'react'
import "./plantas.css";
import frutilla from "../../images/Frutilla.jpg";
import fondo from "../../images/image.jpg";
// git merge


function Frutilla() {
  return (
    <div className='main' >
      <img src={fondo} alt="Fondo" width="100%" height="100%" />
      <div className='informacion'>
        <div >
          <div className="planta1">
            Frutilla
          </div>
          <div className="titulo">
            Descripcion
          </div>
          <div className="texto">
            Lorem ipsum dolor sit amet consectetur adipiscing, elit interdum elementum dui laoreet purus torquent, ullamcorper nostra at morbi himenaeos. Vestibulum proin ornare nibh cursus porttitor volutpat ad, fames aenean dictumst praesent facilisis per placerat curae, habitasse suscipit nulla vulputate nec lacus.
          </div>
          <div className="titulo">
            Cultivo
          </div>
          <div className="texto">
            Lorem ipsum dolor sit amet consectetur adipiscing, elit interdum elementum dui laoreet purus torquent, ullamcorper nostra at morbi himenaeos. Vestibulum proin ornare nibh cursus porttitor volutpat ad, fames aenean dictumst praesent facilisis per placerat curae, habitasse suscipit nulla vulputate nec lacus.
          </div>
          <div className="titulo">
            Cuidados
          </div>
          <div className="texto">
            Lorem ipsum dolor sit amet consectetur adipiscing, elit interdum elementum dui laoreet purus torquent, ullamcorper nostra at morbi himenaeos. Vestibulum proin ornare nibh cursus porttitor volutpat ad, fames aenean dictumst praesent facilisis per placerat curae, habitasse suscipit nulla vulputate nec lacus.
          </div>
          <div className="titulo">
            Recomendaciones
          </div>
          <div className="texto">
            Lorem ipsum dolor sit amet consectetur adipiscing, elit interdum elementum dui laoreet purus torquent, ullamcorper nostra at morbi himenaeos. Vestibulum proin ornare nibh cursus porttitor volutpat ad, fames aenean dictumst praesent facilisis per placerat curae, habitasse suscipit nulla vulputate nec lacus.
          </div>
          <div className="titulo">
            Reproduccion
          </div>
          <div className="texto">
            Lorem ipsum dolor sit amet consectetur adipiscing, elit interdum elementum dui laoreet purus torquent, ullamcorper nostra at morbi himenaeos. Vestibulum proin ornare nibh cursus porttitor volutpat ad, fames aenean dictumst praesent facilisis per placerat curae, habitasse suscipit nulla vulputate nec lacus.
          </div>
        </div>
      </div>
      <div className='imagenplanta'>
        <div align="center" className="fondo ">
          <img src={frutilla} alt="" width="80%" height="270" />
        </div>
      </div>

    </div>
  )
}
export default Frutilla