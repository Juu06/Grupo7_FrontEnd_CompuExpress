import { Box } from "@mui/material";
import React from "react";
import DataGridTooltip from "./TablaTooltip";

export default function Carrito({ articulosCarrito, setArticulosCarrito }) {

    return (
        <Box sx={{ height: '100%', width: '100%' }}>
            <DataGridTooltip productos={articulosCarrito} setProductos={setArticulosCarrito} />
        </Box>
    );
}