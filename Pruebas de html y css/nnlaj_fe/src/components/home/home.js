import React from "react";
import "./home.css";


import camote from "../../images/Camote.jpg";
import aji from "../../images/Aji.jpg";
import fondo from "../../images/Fondo.jpg";
import dragon from "../../images/Fruta del dragon.jpg";
import frutilla from "../../images/Frutilla.jpg";
import romanesco from "../../images/Romanesco.jpg";
import zapallo from "../../images/Zapallo.jpg";



function Home() {
  return (
    <div class="Fondo">
      <div class="Home" align="center">
        <div class="Fondo">
          <img src={fondo} alt="Fondo" width="100%" height="100%" />
        </div>
        <table border="3">
          <tr>
            <td>Camote</td>
            <td>Aji</td>
          </tr>
          <tr>
            <td>
              <a href="Camote" class="Flex">
                <img src={camote} alt="Camote" width="500" height="500" />
              </a>
            </td>
            <td>
              <a href="Aji" class="Flex">
                <img src={aji} alt="Aji" width="500" height="500" />
              </a>
            </td>
          </tr>
          <tr>
            <td>Dragon</td>
            <td>Romanesco</td>
          </tr>
          <tr>
            <td>
              <a href="Dragon" class="Flex">
                <img src={dragon} alt="Dragon" width="500" height="500" />
              </a>
            </td>
            <td>
              <a href="Romanesco" class="Flex">
                <img src={romanesco} alt="Romanesco" width="500" height="500" />
              </a>
            </td>
          </tr>
          <tr>
            <td>Zapallo</td>
            <td>Frutilla</td>
          </tr>
          <tr>
            <td>
              <a href="Zapallo" class="Flex">
                <img src={zapallo} alt="Zapallo" width="500" height="500" />
              </a>
            </td>
            <td>
              <a href="Frutilla" class="Flex">
                <img src={frutilla} alt="Frutilla" width="500" height="500" />
              </a>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );


}
export default Home;
