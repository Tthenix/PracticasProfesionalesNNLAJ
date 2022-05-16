import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";


import Home from "./components/home/home";
import Nosotros from "./components/nosotros";
import Notas from "./components/notas";
import NavBarExample from "./layouts/navbar";
import Camote from "./components/plantas/camote";
import Aji from "./components/plantas/aji";
import Dragon from "./components/plantas/dragon"
import Frutilla from "./components/plantas/frutilla";
import Romanesco from "./components/plantas/romanesco";
import Zapallo from "./components/plantas/zapallo";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBarExample />}>
          <Route path="/" element={<Home />} />
            
            <Route path="nosotros" element={<Nosotros />} />
            <Route path="notas" element={<Notas />} />
            <Route path="camote" element={<Camote />} />
            <Route path="aji" element={<Aji />} />
            <Route path="zapallo" element={<Zapallo />} />
            <Route path="dragon" element={<Dragon />} />
            <Route path="frutilla" element={<Frutilla />} />
            <Route path="romanesco" element={<Romanesco />} />

            <Route path="*" element={<Navigate replace to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
