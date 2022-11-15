import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Search from "./Search";
import TextField from "./TextField";
import Navegacion from "./Navegacion";
import RangoPrecios from "./RangoPrecios";
import FotosInicio from "./FotosInicio";
import oferta from "../images/increase.png";
import producto1 from "../images/product/img1.jpg";
import producto2 from "../images/product/img2.jpg";
import producto3 from "../images/product/img3.jpg";
import producto4 from "../images/product/img4.jpg";
import perifericos from "../images/other/perifericos.jpg";
import audio from "../images/other/audio.jpg";
import like from "../images/icons/good_quality.png";
import { Button, Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import SendIcon from "@mui/icons-material/Send";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function Item(props) {
    const { sx, ...other } = props;
    return (
      <Box
        sx={{
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#101010" : "#fff",
          color: (theme) =>
            theme.palette.mode === "dark" ? "grey.300" : "grey.800",
          border: "1px solid",
          borderColor: (theme) =>
            theme.palette.mode === "dark" ? "grey.800" : "grey.300",
          p: 1,
          m: 1,
          borderRadius: 2,
          fontSize: "0.875rem",
          fontWeight: "700",
          ...sx,
        }}
        {...other}
      />
    );
  }

  Item.propTypes = {
    sx: PropTypes.oneOfType([
      PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
      ),
      PropTypes.func,
      PropTypes.object,
    ]),
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          height: "100%",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "5fr 1fr",
          bgcolor: "#565548",
        }}
      >
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            gridColumn: "1",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              sx={{ fontWeight: "bold", fontSize: 18 }}
              label="Inicio"
              {...a11yProps(0)}
            />
            <Tab
              sx={{ fontWeight: "bold", fontSize: 18 }}
              label="Tienda"
              {...a11yProps(1)}
            />
            <Tab
              sx={{ fontWeight: "bold", fontSize: 18 }}
              label="Nosotros"
              {...a11yProps(2)}
            />
            <Tab
              sx={{ fontWeight: "bold", fontSize: 18 }}
              label="Contacto"
              {...a11yProps(3)}
            />
          </Tabs>
        </Box>
        <Box
          sx={{
            border: 1,
            borderColor: "transparent",
            gridColumn: "2",
            display: "center",
            bgcolor: "transparent",
            borderWidth: "5px",
          }}
        >
          <Search />
        </Box>
      </Box>
      <Box sx={{ bgcolor: "black" }}>
        <TabPanel value={value} index={0}>
          <Box
            sx={{
              display: "grid",
              gridTemplateRows: "repeat (3, 1fr)",
            }}
          >
            <Item>
              <FotosInicio />
            </Item>
            <Item>
              <Box
                sx={{
                  borderBottom: 1,
                  borderColor: "divider",
                }}
              >
                <Typography
                  sx={{ fontWeight: "bold", fontSize: 30, color: "black" }}
                >
                  OFERTAS!
                  <img
                    alt=""
                    src={oferta}
                    style={{
                      marginLeft: "2px",
                    }}
                  ></img>
                </Typography>
                <br />
                <Box>
                  <Typography
                    gutterBottom
                    sx={{ fontWeight: "bold", fontSize: 15, color: "black" }}
                  >
                    Las ofertas de este mes
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: "165px",
                    borderTop: 4,
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                ></Box>
              </Box>
              <div style={{ width: "100%" }}>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat (4, 1fr)",
                  }}
                >
                  <Item sx={{ gridColumn: "1", height: "350px" }}>
                    <img
                      alt=""
                      src={producto1}
                      style={{
                        height: "220px",
                        width: "220px",
                        marginBottom: "10px",
                      }}
                    />
                    <Typography
                      sx={{ display: "flex", color: "grey", fontSize: "14px" }}
                    >
                      PERIFÉRICOS / MOUSE
                    </Typography>
                    <Typography
                      sx={{
                        display: "flex",
                        fontSize: "15px",
                        fontWeight: "bold",
                      }}
                    >
                      MOUSE REDRAGON IMPACT
                    </Typography>
                    <Box sx={{ display: "flex", marginTop: "10px" }}>
                      <Button
                        variant="outlined"
                        color="inherit"
                        sx={{ borderRadius: "15px", padding: "0px 6px" }}
                      >
                        AGREGAR AL CARRITO
                      </Button>
                      <Typography
                        sx={{ marginLeft: "auto", fontWeight: "bold" }}
                      >
                        450
                      </Typography>
                    </Box>
                  </Item>
                  <Item sx={{ gridColumn: "2", height: "350px" }}>
                    <img
                      alt=""
                      src={producto2}
                      style={{
                        height: "220px",
                        width: "220px",
                        marginBottom: "10px",
                      }}
                    />
                    <Typography
                      sx={{ display: "flex", color: "grey", fontSize: "14px" }}
                    >
                      PERIFÉRICOS / MOUSE
                    </Typography>
                    <Typography
                      sx={{
                        display: "flex",
                        fontSize: "15px",
                        fontWeight: "bold",
                      }}
                    >
                      MOUSE REDRAGON IMPACT
                    </Typography>
                    <Box sx={{ display: "flex", marginTop: "10px" }}>
                      <Button
                        variant="outlined"
                        color="inherit"
                        sx={{ borderRadius: "15px", padding: "0px 6px" }}
                      >
                        AGREGAR AL CARRITO
                      </Button>
                      <Typography
                        sx={{ marginLeft: "auto", fontWeight: "bold" }}
                      >
                        4500
                      </Typography>
                    </Box>
                  </Item>
                  <Item sx={{ gridColumn: "3", height: "350px" }}>
                    <img
                      alt=""
                      src={producto3}
                      style={{
                        height: "220px",
                        width: "220px",
                        marginBottom: "10px",
                      }}
                    />
                    <Typography
                      sx={{ display: "flex", color: "grey", fontSize: "14px" }}
                    >
                      PERIFÉRICOS / MOUSE
                    </Typography>
                    <Typography
                      sx={{
                        display: "flex",
                        fontSize: "15px",
                        fontWeight: "bold",
                      }}
                    >
                      MOUSE REDRAGON IMPACT
                    </Typography>
                    <Box sx={{ display: "flex", marginTop: "10px" }}>
                      <Button
                        variant="outlined"
                        color="inherit"
                        sx={{ borderRadius: "15px", padding: "0px 6px" }}
                      >
                        AGREGAR AL CARRITO
                      </Button>
                      <Typography
                        sx={{ marginLeft: "auto", fontWeight: "bold" }}
                      >
                        4000
                      </Typography>
                    </Box>
                  </Item>
                  <Item sx={{ gridColumn: "4", height: "350px" }}>
                    <img
                      alt=""
                      src={producto4}
                      style={{
                        height: "220px",
                        width: "220px",
                        marginBottom: "10px",
                      }}
                    />
                    <Typography
                      sx={{ display: "flex", color: "grey", fontSize: "14px" }}
                    >
                      PERIFÉRICOS / MOUSE
                    </Typography>
                    <Typography
                      sx={{
                        display: "flex",
                        fontSize: "15px",
                        fontWeight: "bold",
                      }}
                    >
                      MOUSE REDRAGON IMPACT
                    </Typography>
                    <Box sx={{ display: "flex", marginTop: "10px" }}>
                      <Button
                        variant="outlined"
                        color="inherit"
                        sx={{ borderRadius: "15px", padding: "0px 6px" }}
                      >
                        AGREGAR AL CARRITO
                      </Button>
                      <Typography
                        sx={{ marginLeft: "auto", fontWeight: "bold" }}
                      >
                        6500
                      </Typography>
                    </Box>
                  </Item>
                </Box>
              </div>
            </Item>
            <Item
              sx={{
                height: "250px",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
              }}
            >
              <Box sx={{ gridColumn: "1" }}>
                <Typography
                  sx={{
                    position: "absolute",
                    zIndex: 9,
                    marginLeft: "40px",
                    marginTop: "20px",
                    color: "white",
                    fontSize: 20,
                  }}
                >
                  PERIFÉRICOS
                </Typography>
                <img
                  alt=""
                  src={perifericos}
                  style={{
                    height: "220px",
                    width: "98%",
                    position: "relative",
                    zIndex: 1,
                  }}
                />
              </Box>
              <Box sx={{ gridColumn: "2" }}>
                <Typography
                  sx={{
                    position: "absolute",
                    zIndex: 9,
                    marginLeft: "40px",
                    marginTop: "20px",
                    color: "white",
                    fontSize: 20,
                  }}
                >
                  AUDIO
                </Typography>
                <img
                  alt=""
                  src={audio}
                  style={{
                    height: "220px",
                    width: "98%",
                    marginLeft: "10px",
                  }}
                />
              </Box>
            </Item>
            <Item>
              <Box
                sx={{
                  borderBottom: 1,
                  borderColor: "divider",
                }}
              >
                <Typography
                  sx={{ fontWeight: "bold", fontSize: 30, color: "black" }}
                >
                  PRODUCTOS RECOMENDADOS
                  <img
                    alt=""
                    src={like}
                    style={{
                      marginLeft: "2px",
                    }}
                  ></img>
                </Typography>
                <br />
                <Box>
                  <Typography
                    gutterBottom
                    sx={{ fontWeight: "bold", fontSize: 15, color: "black" }}
                  >
                    NUESTROS MEJORES PRODUCTOS
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: "240px",
                    borderTop: 4,
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                ></Box>
              </Box>
              <Box sx={{ width: "100%" }}>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat (4, 1fr)",
                  }}
                >
                  <Item sx={{ gridColumn: "1", height: "350px" }}>
                    <img
                      alt=""
                      src={producto1}
                      style={{
                        height: "220px",
                        width: "220px",
                        marginBottom: "10px",
                      }}
                    />
                    <Typography
                      sx={{ display: "flex", color: "grey", fontSize: "14px" }}
                    >
                      PERIFÉRICOS / MOUSE
                    </Typography>
                    <Typography
                      sx={{
                        display: "flex",
                        fontSize: "15px",
                        fontWeight: "bold",
                      }}
                    >
                      MOUSE REDRAGON IMPACT
                    </Typography>
                    <Box sx={{ display: "flex", marginTop: "10px" }}>
                      <Button
                        variant="outlined"
                        color="inherit"
                        sx={{ borderRadius: "15px", padding: "0px 6px" }}
                      >
                        AGREGAR AL CARRITO
                      </Button>
                      <Typography
                        sx={{ marginLeft: "auto", fontWeight: "bold" }}
                      >
                        450
                      </Typography>
                    </Box>
                  </Item>
                  <Item sx={{ gridColumn: "2", height: "350px" }}>
                    <img
                      alt=""
                      src={producto2}
                      style={{
                        height: "220px",
                        width: "220px",
                        marginBottom: "10px",
                      }}
                    />
                    <Typography
                      sx={{ display: "flex", color: "grey", fontSize: "14px" }}
                    >
                      PERIFÉRICOS / MOUSE
                    </Typography>
                    <Typography
                      sx={{
                        display: "flex",
                        fontSize: "15px",
                        fontWeight: "bold",
                      }}
                    >
                      MOUSE REDRAGON IMPACT
                    </Typography>
                    <Box sx={{ display: "flex", marginTop: "10px" }}>
                      <Button
                        variant="outlined"
                        color="inherit"
                        sx={{ borderRadius: "15px", padding: "0px 6px" }}
                      >
                        AGREGAR AL CARRITO
                      </Button>
                      <Typography
                        sx={{ marginLeft: "auto", fontWeight: "bold" }}
                      >
                        4500
                      </Typography>
                    </Box>
                  </Item>
                  <Item sx={{ gridColumn: "3", height: "350px" }}>
                    <img
                      alt=""
                      src={producto3}
                      style={{
                        height: "220px",
                        width: "220px",
                        marginBottom: "10px",
                      }}
                    />
                    <Typography
                      sx={{ display: "flex", color: "grey", fontSize: "14px" }}
                    >
                      PERIFÉRICOS / MOUSE
                    </Typography>
                    <Typography
                      sx={{
                        display: "flex",
                        fontSize: "15px",
                        fontWeight: "bold",
                      }}
                    >
                      MOUSE REDRAGON IMPACT
                    </Typography>
                    <Box sx={{ display: "flex", marginTop: "10px" }}>
                      <Button
                        variant="outlined"
                        color="inherit"
                        sx={{ borderRadius: "15px", padding: "0px 6px" }}
                      >
                        AGREGAR AL CARRITO
                      </Button>
                      <Typography
                        sx={{ marginLeft: "auto", fontWeight: "bold" }}
                      >
                        4000
                      </Typography>
                    </Box>
                  </Item>
                  <Item sx={{ gridColumn: "4", height: "350px" }}>
                    <img
                      alt=""
                      src={producto4}
                      style={{
                        height: "220px",
                        width: "220px",
                        marginBottom: "10px",
                      }}
                    />
                    <Typography
                      sx={{ display: "flex", color: "grey", fontSize: "14px" }}
                    >
                      PERIFÉRICOS / MOUSE
                    </Typography>
                    <Typography
                      sx={{
                        display: "flex",
                        fontSize: "15px",
                        fontWeight: "bold",
                      }}
                    >
                      MOUSE REDRAGON IMPACT
                    </Typography>
                    <Box sx={{ display: "flex", marginTop: "10px" }}>
                      <Button
                        variant="outlined"
                        color="inherit"
                        sx={{ borderRadius: "15px", padding: "0px 6px" }}
                      >
                        AGREGAR AL CARRITO
                      </Button>
                      <Typography
                        sx={{ marginLeft: "auto", fontWeight: "bold" }}
                      >
                        6500
                      </Typography>
                    </Box>
                  </Item>
                </Box>
              </Box>
            </Item>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Navegacion />
          <RangoPrecios />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography sx={{ textAlign: "left", color: "#f5f5f5" }}>
              Nuestro sitio web se dedica a la venta de hardware y periféricos
              de computadoras. Dentro de ésto nos encontramos con una Tienda
              llena de productos dentro del rubro de la tecnología, tales como
              elementos de Computadoras en categorías de:
            </Typography>
            <Box
              sx={{
                marginLeft: "auto",
                marginRight: "auto",
                color: "#f5f5f5",
              }}
            >
              <Typography sx={{ textAlign: "left" }}>
                - Periféricos (Mouses, Teclados, etc.)
              </Typography>
              <Typography sx={{ textAlign: "left" }}>
                - Audio (Auriculares, Parlantes, etc.)
              </Typography>
              <Typography sx={{ textAlign: "left" }}>
                - Video (Pantallas LED, Monitores, etc.)
              </Typography>
              <Typography sx={{ textAlign: "left" }}>
                - Mantenimiento
              </Typography>
              <Typography sx={{ textAlign: "left" }}>
                - Accesorios (Cables Auxiliares, Cables USB, Cables de Video)
              </Typography>
            </Box>
            <br />
            <Typography sx={{ textAlign: "left", color: "#f5f5f5" }}>
              Este sitio está dirigido hacia el público general, pero
              específicamente a aquellos aficionados de la tecnología. Es decir,
              específico hacia adultos o jóvenes adultos con conocimientos
              previos de tecnolgía. Nos dedicamos en particular a la Industria
              del Gaming.
            </Typography>
            <br />
            <Typography sx={{ textAlign: "left", color: "#f5f5f5" }}>
              Por esta razón, nos enfocaremos en ofrecer productos de calidad y
              de alta gama, y con una descripción abundante de las
              especificaciones de cada artículo en nuestra página, para que así
              nuestro público específico se sienta más interesado y acompañado
              al momento de su compra.
            </Typography>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <TextField />
        </TabPanel>
      </Box>
      <Box
        sx={{
          bgcolor: "#565548",
          width: "100%",
          height: "300px",
          display: "grid",
          gridTemplateColumns: "repeat (3, 1fr)",
        }}
      >
        <Box
          sx={{
            bgcolor: "black",
            width: "300px",
            height: "170px",
            gridColumn: "1",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "auto",
            marginBottom: "auto",
          }}
        >
          <Box sx={{ padding: "20px", height: "170px" }}>
            <Typography
              sx={{
                fontSize: "16px",
                textAlign: "left",
                textTransform: "uppercase",
                color: "white",
                letterSpacing: "1px",
                marginBottom: "8px",
                borderBottom: "1px solid white",
              }}
            >
              LINKS IMPORTANTES
            </Typography>
            <Typography
              sx={{
                color: "white",
                textAlign: "left",
                fontSize: "16px",
                marginLeft: "15px",
              }}
            >
              <Link
                href="#"
                underline="hover"
                sx={{ color: "white", textAlign: "left" }}
              >
                Nosotros
              </Link>
            </Typography>
            <Typography
              sx={{
                color: "white",
                textAlign: "left",
                fontSize: "16px",
                marginLeft: "15px",
              }}
            >
              <Link
                href="#"
                underline="hover"
                sx={{ color: "white", textAlign: "left" }}
              >
                Contacto
              </Link>
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            bgcolor: "black",
            width: "300px",
            height: "170px",
            gridColumn: "2",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "auto",
            marginBottom: "auto",
          }}
        >
          <Box sx={{ padding: "20px", height: "170px" }}>
            <Typography
              sx={{
                fontSize: "16px",
                textAlign: "left",
                textTransform: "uppercase",
                color: "white",
                letterSpacing: "1px",
                marginBottom: "8px",
                borderBottom: "1px solid white",
              }}
            >
              INFORMACIÓN
            </Typography>
            <Typography
              sx={{
                color: "white",
                textAlign: "left",
                fontSize: "16px",
                marginLeft: "15px",
              }}
            >
              <Link
                href="#"
                underline="hover"
                sx={{ color: "white", textAlign: "left" }}
              >
                Mi Cuenta
              </Link>
            </Typography>
            <Typography
              sx={{
                color: "white",
                textAlign: "left",
                fontSize: "16px",
                marginLeft: "15px",
              }}
            >
              <Link
                href="#"
                underline="hover"
                sx={{ color: "white", textAlign: "left" }}
              >
                Mis Pedidos
              </Link>
            </Typography>
            <Typography
              sx={{
                color: "white",
                textAlign: "left",
                fontSize: "16px",
                marginLeft: "15px",
              }}
            >
              <Link
                href="#"
                underline="hover"
                sx={{ color: "white", textAlign: "left" }}
              >
                Carrito
              </Link>
            </Typography>
            <Typography
              sx={{
                color: "white",
                textAlign: "left",
                fontSize: "16px",
                marginLeft: "15px",
              }}
            >
              <Link
                href="#"
                underline="hover"
                sx={{ color: "white", textAlign: "left" }}
              >
                Checkout
              </Link>
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            bgcolor: "black",
            width: "300px",
            height: "170px",
            gridColumn: "3",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "auto",
            marginBottom: "auto",
          }}
        >
          <Box sx={{ padding: "20px", height: "170px" }}>
            <Typography
              sx={{
                fontSize: "16px",
                textAlign: "left",
                textTransform: "uppercase",
                color: "white",
                letterSpacing: "1px",
                marginBottom: "8px",
                borderBottom: "1px solid white",
              }}
            >
              SIGUENOS!
            </Typography>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                marginBottom: "10px",
              }}
            >
              <FacebookIcon
                sx={{
                  color: "white",
                  cursor: "pointer",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
              <TwitterIcon
                sx={{
                  color: "white",
                  cursor: "pointer",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
              <InstagramIcon
                sx={{
                  color: "white",
                  cursor: "pointer",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
            </Box>
            <Typography
              sx={{
                fontSize: "16px",
                textAlign: "left",
                textTransform: "uppercase",
                color: "white",
                letterSpacing: "1px",
                marginBottom: "8px",
                borderBottom: "1px solid white",
              }}
            >
              SUSCRIBETE!
            </Typography>
            <Search
              positionIcon="right"
              icon={<SendIcon />}
              placeholder="Email"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
