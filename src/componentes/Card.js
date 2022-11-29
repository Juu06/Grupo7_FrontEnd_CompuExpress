import { Box, Button, Typography } from "@mui/material";
import React from "react";

export default function Card({ producto, setArticulosCarrito }) {

  return (
    <Box>
      <img
        alt=""
        src={producto?.imagen}
        style={{
          height: "220px",
          width: "220px",
          marginBottom: "10px",
        }}
      />
      <Typography sx={{ display: "flex", color: "grey", fontSize: "14px" }}>
        {producto?.categoria}
      </Typography>
      <Typography
        sx={{
          display: "flex",
          fontSize: "15px",
          fontWeight: "bold",
        }}
      >
        {producto?.descripcion}
      </Typography>
      <Box sx={{ display: "flex", marginTop: "10px" }}>
        <Button
          variant="outlined"
          color="inherit"
          onClick={() => {
            setArticulosCarrito((prev) => {
              const productoFinal = [{
                id: prev.length + 1,
                Imagen: <img
                  alt=""
                  src={producto?.imagen}
                  style={{
                    height: "80px",
                    width: "80px",
                  }}
                />,
                Producto: producto?.descripcion,
                Precio: producto?.precio,
                Cantidad: 1,
                Monto: producto?.precio
              }];
              if (prev.length === 0) {
                return prev.concat(productoFinal);
              } else {
                if (prev.filter((prod) => prod.Producto === producto.descripcion).length > 0) {
                  // hacer el dialog diciendo que el producto ya esta en el carrito
                  return prev;
                } else {
                  // hacer el dialog de que el producto fue agregado al carrito
                  return prev.concat(productoFinal);
                }
              }
            })
          }}
          sx={{ borderRadius: "15px", padding: "0px 6px" }}
        >
          AGREGAR AL CARRITO
        </Button>
        <Typography sx={{ marginLeft: "auto", fontWeight: "bold" }}>
          {producto?.precio}
        </Typography>
      </Box>
    </Box>
  );
}
