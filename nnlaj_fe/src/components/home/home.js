import React from "react";
import "./home.css";


import camote from "../../images/Camote.jpg";
import aji from "../../images/Aji.jpg";
import fondo from "../../images/image.jpg";
import dragon from "../../images/Fruta del dragon.jpg";
import frutilla from "../../images/Frutilla.jpg";
import romanesco from "../../images/Romanesco.jpg";
import zapallo from "../../images/Zapallo.jpg";



function Home() {
   return (
    <div class="Home" align="center">
      <div class="Fondo">
        <img src={fondo} alt="Fondo" width="100%" height="100%"  />
        <div class="TextoIMg">
          ElHuerto
        </div>
        <div class="TextoIMg2">
          Invernadero de la ETEC  
        </div>
      </div>   
      
      <div class="planta" align="center">
      <table border="0">
        <tbody>
        <tr>
          <td align="center">Camote</td>
          <td align="center">Aji</td>
        </tr>
        <tr>
          <td>
            <a href="Camote">
              <img src={camote} alt="Camote" width="250" height="250" />
            </a>
          </td>
          <td>
            <a href="Aji">
              <img src={aji} alt="Aji" width="250" height="250" />
            </a>
          </td>      
        </tr>
        <tr>
          <td align="center">Dragon</td>
          <td align="center">Romanesco</td>
        </tr>
        <tr>
          <td>
            <a href="Dragon">
              <img src={dragon} alt="Dragon" width="250" height="250" />
            </a>
          </td>
          <td>
            <a href="Romanesco">
              <img src={romanesco} alt="Romanesco" width="250" height="250" />
            </a>
          </td>
        </tr>
        <tr>
          <td align="center">Zapallo</td>
          <td align="center">Frutilla</td>
        </tr>
        <tr>
          <td>
            <a href="Zapallo">
              <img src={zapallo} alt="Zapallo" width="250" height="250" />
            </a>
          </td>
          <td>
            <a href="Frutilla">
              <img src={frutilla} alt="Frutilla" width="250" height="250" />
            </a>
          </td>
        </tr>
        </tbody>
      </table>
      </div>
    </div>
  );

  
}
export default Home;
