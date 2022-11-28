import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import logoCompuExpress from "../images/logoCompuExpress.png";
import { IconButton, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import DataGridTooltip from "./TablaTooltip";
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';

function ResponsiveAppBar({ articulosCarrito, setArticulosCarrito, setValue }) {

  const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 650,
      minWidth: 650,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
  }));

  return (
    <AppBar position="static" color="transparent" sx={{ height: "200px" }}>
      <Box
        sx={{
          bgcolor: "#565548",
          height: "100%",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            margin: "15px",
            width: "400px",
          }}
        >
          <img
            src={logoCompuExpress}
            alt=""
            style={{
              width: "150px",
              height: "150px",
            }}
          />
          <Box sx={{ marginLeft: "10px", display: 'grid', gridTemplateRows: '1fr 1fr' }}>
            <Typography
              sx={{
                marginTop: "auto",
                textAlign: 'left',
                gridRow: '1',
                fontWeight: "bold",
                fontSize: 30,
              }}
            >
              E-COMMERCE
            </Typography>
            <br />
            <Typography
              sx={{
                marginTop: "auto",
                textAlign: 'left',
                fontWeight: "bold",
                fontSize: 30,
                gridRow: '2',
                color: "#b3aa65",
              }}
            >
              Compu Express
            </Typography>
          </Box>
        </Box>

        <CustomTooltip sx={{ width: '150px' }} placement="bottom-end" title={
          <List sx={{ width: '150px' }}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Mi cuenta" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list">
                <ListItemText primary="Mis pedidos" />
              </ListItemButton>
            </ListItem>
          </List>
         }
        >
          <IconButton
            sx={{ marginLeft: 'auto', height: '40px', marginBottom: 'auto', marginTop: '7px', marginRight: '7px' }} color="primary" aria-label="delete"
            onClick={() => { setValue(2) }}
          >
            <PersonIcon />
          </IconButton>
        </CustomTooltip>

        <CustomTooltip placement="bottom-end" title='Mis favoritos'>
          <IconButton
            sx={{ height: '40px', marginBottom: 'auto', marginTop: '7px', marginRight: '7px' }} color="primary" aria-label="delete"
            onClick={() => { setValue(2) }}
          >
            <FavoriteIcon />
          </IconButton>
        </CustomTooltip>

        <CustomTooltip placement="bottom-end" title={articulosCarrito.length === 0 ? <Typography>El carrito aun no contiene productos agregados</ Typography> : <DataGridTooltip productos={articulosCarrito} setProductos={setArticulosCarrito} />}>
          <IconButton
            sx={{ height: '40px', marginBottom: 'auto', marginTop: '7px', marginRight: '7px' }} color="primary" aria-label="delete"
            onClick={() => { setValue(2) }}
          >
            <ShoppingCartIcon />
          </IconButton>
        </CustomTooltip>

      </Box>
    </AppBar>
  );
}
export default ResponsiveAppBar;
