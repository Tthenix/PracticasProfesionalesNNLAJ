import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";


import Home from "./components/home";
import Nosotros from "./components/nosotros";
import Notas from "./components/notas";
import NavBarExample from "./layouts/navbar";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBarExample />}>
            <Route path="home" element={<Home />} />
            <Route path="nosotros" element={<Nosotros />} />
            <Route path="notas" element={<Notas />} />

            <Route path="*" element={<Navigate replace to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
