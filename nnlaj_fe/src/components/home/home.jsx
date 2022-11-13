import React from "react";
import "./home.css";
import { Bar } from 'react-chartjs-2/dist';
import { options } from "./dashboard/barchart.tsx";
import { data } from "./dashboard/barchart.tsx";


import camote from "../../images/Camote.jpg";
import aji from "../../images/Aji.jpg";
import fondo from "../../images/image.jpg";
import dragon from "../../images/Fruta del dragon.jpg";
import frutilla from "../../images/Frutilla.jpg";
import romanesco from "../../images/Romanesco.jpg";
import zapallo from "../../images/Zapallo.jpg";

function Home() { 
   return (
    <div className="Home" align="center">
    <div className="Fondo">
      <img src={fondo} alt="Fondo" width="100%" height="100%"  />
      <div class="TextoIMg">
        ElHuerto
      </div>
      <div className="TextoIMg2">
        Invernadero de la ETEC  
      </div>
    </div>   

<div className="container text-center">    

<div className="row">
    <div className="col-6"><div className="col-lg-6">
    <div className="card">
        <div className="card-body">
            <h4 className="card-title">Informacion invernadero</h4>
            <div className="d-flex align-items-center flex-row m-t-30">
                <div className="display-5 text-info">
                    <span>15<sup>°</sup></span></div>
            </div>
            <table className="table no-border mini-table m-t-20">
                <tbody>
                    <tr>
                        <td className="text-muted">Humedad del suelo</td>
                        <td className="font-medium"></td>
                    </tr>
                    <tr>
                        <td className="text-muted">Humedad relativa</td>
                        <td className="font-medium">83%</td>
                    </tr>
                    <tr>
                        <td className="text-muted">Presión</td>
                        <td className="font-medium">28.56 in</td>
                    </tr>
                </tbody>
            </table>
            <ul className="row list-style-none text-center m-t-30">
                <div className="col-3">
                    <h4 className="text-info"></h4>
                    <span className="d-block text-muted">09:30</span>
                    <h3 className="m-t-5">9<sup>°</sup></h3>
                </div>
                <div className="col-3">
                    <h4 className="text-info"></h4>
                    <span className="d-block text-muted">11:30</span>
                    <h3 className="m-t-5">12<sup>°</sup></h3>
                </div>
                <div className="col-3">
                    <h4 className="text-info"></h4>
                    <span className="d-block text-muted">13:30</span>
                    <h3 className="m-t-5">15<sup>°</sup></h3>
                </div>
                <div className="col-3">
                    <h4 className="text-info"></h4>
                    <span className="d-block text-muted">15:30</span>
                    <h3 className="m-t-5">19<sup>°</sup></h3>
                </div>
            </ul>
        </div>
    </div>
</div>
</div>
<div className="col-6">

<Bar options={options} data={data} />;
 
</div>
    </div>
    <div className="row">
        <div className="col"><div className="planta" align="center">
      <table border="0">
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
      </table>
      </div>
</div>
</div>
</div>

</div>
  );
}
export default Home;
