import * as React from "react";
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, Typography } from "@mui/material";
import LinearProgress from '@mui/material/LinearProgress';

export default function DataGridTooltip({ productos, setProductos }) {
    const [lineaDeProgreso, setLineaDeProgreso] = React.useState(false);
    const columns = [
        {
            field: 'Imagen',
            description: 'Imagen',
            headerName: 'Imagen',
            sortable: false,
            flex: 1,
            renderCell: (params) => (
                <Box>
                    {params.row.Imagen}
                </Box>
            )
        },
        {
            field: 'Producto',
            description: 'Producto',
            headerName: 'Producto',
            sortable: false,
            flex: 2,
        },
        {
            field: 'Precio',
            description: 'Precio',
            headerName: 'Precio',
            sortable: false,
            flex: 1,
        },
        {
            field: 'Cantidad',
            description: 'Cantidad',
            headerName: 'Cant.',
            type: 'number',
            sortable: false,
            editable: true,
            flex: 0.5,
        },
        {
            field: 'Monto',
            headerName: 'Monto',
            description: 'Monto',
            sortable: false,
            flex: 1,
            valueGetter: (params) => params.row.Precio * params.row.Cantidad
        },
    ];
    React.useEffect(() => {
        setMonto(productos.reduce(function (acc, obj) { return parseInt(acc) + parseInt(obj.Monto); }, 0));
    }, [productos]);

    const [monto, setMonto] = React.useState(productos.reduce(function (acc, obj) { return parseInt(acc) + parseInt(obj.Monto); }, 0));
    return (
        <Box sx={{ bgcolor: 'white', width: '100%' }}>
            <DataGrid
                autoHeight
                getRowHeight={() => 'auto'}
                components={{
                    LoadingOverlay: LinearProgress,
                }}
                loading={lineaDeProgreso}
                getRowId={(row) => row.id}
                disableColumnMenu
                rows={productos}
                columns={columns}
                pageSize={20}
                rowsPerPageOptions={[5]}
                hideFooter
            />
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', marginTop: '10px' }}>
                <Typography sx={{ marginLeft: 'auto' }}>Monto total a abonar ${parseInt(monto)} </Typography>
                <Button
                    variant="outlined"
                    color="inherit"
                    onClick={() => {}}
                    sx={{ marginLeft: '10px', borderRadius: "15px", padding: "0px 6px" }}
                >
                    CONFIRMAR PEDIDO
                </Button>
            </Box>
        </Box>);
}