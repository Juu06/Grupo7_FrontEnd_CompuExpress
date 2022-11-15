import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import logoCompuExpress from "../images/logoCompuExpress.png";

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
          height: "100%",
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
      </Box>
    </AppBar>
  );
}
export default ResponsiveAppBar;
