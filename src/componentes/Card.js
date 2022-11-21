import { Box, Button, Typography } from "@mui/material";
import React from "react";

export default function Card({producto}) {

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
