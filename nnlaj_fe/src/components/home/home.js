import React from "react";


import camote from "../../images/Camote.jpg";
import aji from "../../images/Aji.jpg";
import fondo from "../../images/Fondo.jpg";
import dragon from "../../images/Fruta del dragon.jpg";
import frutilla from "../../images/Frutilla.jpg";
import romanesco from "../../images/Romanesco.jpg";
import zapallo from "../../images/Zapallo.jpg";



function Home() {
   return (
    <div align="center">
      <div>
        <img src={fondo} alt="Fondo" width="100%" height="100%"  />
      </div>   
      <table border="3">
        <tr>
          <td>Camote</td>
          <td>Aji</td>
          <td>Dragon</td>
        </tr>
        <tr>
          <td>
            <a href="Camote">
              <img src={camote} alt="Camote" width="200" height="200" />
            </a>
          </td>
          <td>
            <a href="Aji">
              <img src={aji} alt="Aji" width="200" height="200" />
            </a>
          </td>
          <td>
            <a href="Dragon">
              <img src={dragon} alt="Dragon" width="200" height="200" />
            </a>
          </td>
        </tr>

        <tr>
          <td>Romanesco</td>
          <td>Zapallo</td>
          <td>Frutilla</td>
        </tr>

        <tr>
          <td>
            <a href="Romanesco">
              <img src={romanesco} alt="Romanesco" width="200" height="200" />
            </a>
          </td>
          <td>
            <a href="Zapallo">
              <img src={zapallo} alt="Zapallo" width="200" height="200" />
            </a>
          </td>
          <td>
            <a href="Frutilla">
              <img src={frutilla} alt="Frutilla" width="200" height="200" />
            </a>
          </td>
        </tr>
      </table>
    </div>
  );

  
}
export default Home;
