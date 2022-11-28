import * as React from "react";
import { DataGrid } from '@mui/x-data-grid';
import { Box } from "@mui/material";
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
            flex: 0.5,
        },
        {
            field: 'Monto',
            headerName: 'Monto',
            description: 'Monto',
            sortable: false,
            flex: 1,
            /* valueGetter: (params: GridValueGetterParams) =>
              `${params.row.firstName || ''} ${params.row.lastName || ''}`, */
        },
    ];

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
                experimentalFeatures={{ newEditingApi: true }}
                hideFooter
            />
        </Box>);
}