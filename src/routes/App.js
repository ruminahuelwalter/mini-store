import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../containers/Home"
import Carrito from "../containers/Carrito";
import Producto from "../containers/Producto";
import Layout from "../components/Layout";
import UsarContexto from "../context/UsarContexto";

function App() {
  return (
    <>
      {/* <div className="App"> No se usa más */}
      {/* bootstrap */}
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossOrigin="anonymous"></link>

      {/* BrowserRouter es el padre de todo, va a enganchar todo, despues viene Router, que dentro de el esta la ruta */}
      <BrowserRouter>
        <UsarContexto>
          <Layout>
            <Routes>
              <Route exact path="/" element = {<Home/>} ></Route>
              <Route exact path="/carrito" element = {<Carrito/>} ></Route>
              <Route exact path="/producto" element = {<Producto/>} ></Route>
            </Routes>
          </Layout>
        </UsarContexto>
      </BrowserRouter>
    </>
  );
}

export default App;
