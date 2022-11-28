import "./App.css";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "./componentes/AppBar";
import Tabs from "./componentes/Tabs";
import producto1 from "./images/product/img1.jpg";
import producto2 from "./images/product/img2.jpg";
import producto3 from "./images/product/img3.jpg";
import producto4 from "./images/product/img4.jpg";
import producto5 from "./images/product/img5.jpg";
import producto6 from "./images/product/img6.jpg";
import { Box } from "@mui/material";

function App() {
  const [value, setValue] = React.useState(0);
  const [articulosCarrito, setArticulosCarrito] = React.useState([
    {
      id: 1,
      Imagen: <img
          alt=""
          src={producto1}
          style={{
            height: "80px",
            width: "80px",
          }}
        />,
      Producto: 'Enzo',
      Precio: 'Fernandez',
      Cantidad: 28,
      Monto: 'Enzo Fernandez'
    },
    {
      id: 2,
      Imagen: <img
          alt=""
          src={producto2}
          style={{
            height: "80px",
            width: "80px",
          }}
        />,
      Producto: 'Enzo',
      Precio: 'Fernandez',
      Cantidad: 28,
      Monto: 'Enzo Fernandez'
    },
    {
      id: 3,
      Imagen: <img
          alt=""
          src={producto3}
          style={{
            height: "80px",
            width: "80px",
          }}
        />,
      Producto: 'Enzo',
      Precio: 'Fernandez',
      Cantidad: 28,
      Monto: 'Enzo Fernandez'
    },
    {
      id: 4,
      Imagen: <img
          alt=""
          src={producto4}
          style={{
            height: "80px",
            width: "80px",
          }}
        />,
      Producto: 'Enzo',
      Precio: 'Fernandez',
      Cantidad: 28,
      Monto: 'Enzo Fernandez'
    },
    {
      id: 5,
      Imagen: <img
          alt=""
          src={producto5}
          style={{
            height: "80px",
            width: "80px",
          }}
        />,
      Producto: 'Enzo',
      Precio: 'Fernandez',
      Cantidad: 28,
      Monto: 'Enzo Fernandez'
    },
    {
      id: 6,
      Imagen: <img
          alt=""
          src={producto6}
          style={{
            height: "80px",
            width: "80px",
          }}
        />,
      Producto: 'Enzo',
      Precio: 'Fernandez',
      Cantidad: 28,
      Monto: 'Enzo Fernandez'
    }
  ]);

  return (
    <div className="App">
      <React.Fragment>
        <CssBaseline />
        <AppBar articulosCarrito={articulosCarrito} setArticulosCarrito={setArticulosCarrito} setValue={setValue} />
        <Tabs articulosCarrito={articulosCarrito} setArticulosCarrito={setArticulosCarrito} value={value} setValue={setValue} />
      </React.Fragment>
    </div>
  );
}

export default App;
