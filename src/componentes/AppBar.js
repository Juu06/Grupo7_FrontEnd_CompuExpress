import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import logoCompuExpress from "../images/logoCompuExpress.png";
import { width } from "@mui/system";

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" color="transparent" sx={{ height: "200px" }}>
      <Box
        sx={{
          bgcolor: "#565548",
          height: "100%"
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            margin: '15px',
            width: '320px'
          }}
        >
          <img
            src={logoCompuExpress}
            style={{
              width: "90px",
            }}
          />
          <Box sx={{ marginLeft: '10px', }}>

            <Typography
              sx={{
                display: "flex",
                fontWeight: 'bold',
                fontSize: 32,
              }}
            >
              E-COMMERCE
            </Typography>
            <br />
            <Typography
              sx={{
                display: "flex",
                fontWeight: 'bold',
                fontSize: 30,
                color: '#b3aa65'
              }}
            >
              Compu Express
            </Typography>

          </Box>
        </Box>
      </Box>
    </AppBar>
  );
}
export default ResponsiveAppBar;
