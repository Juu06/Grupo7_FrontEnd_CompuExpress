import { Box, Link, Slider, SvgIcon, Typography } from "@mui/material";
import * as React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import Card from "./Card";
import producto1 from "../images/product/img1.jpg";
import producto2 from "../images/product/img2.jpg";
import producto3 from "../images/product/img3.jpg";
import producto4 from "../images/product/img4.jpg";
import Item from "./Item";
import useGetData from "./useGetData";

function valuetext(value) {
  return `${value}°C`;
}

const minDistance = 1000;

export default function Tienda() {
  const [value1, setValue1] = React.useState([0, 5000]);
  const [internalForceUpate, setInternalForceUpdate] = React.useState(0);
  const handleChange2 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

  useGetData({
    url: "http://localhost:9000/api/v1/productos/",
    forceUpdateId: internalForceUpate,
    params: {},
    onSuccess: (response) => console.log(response),
  });

  return (
    <Box
      sx={{ height: "100%", display: "grid", gridTemplateColumns: "1fr 5fr" }}
    >
      <Box
        sx={{
          gridColumn: "1",
          height: "100%",
          marginRight: "2%",
          borderRight: "2px solid #eee",
          paddingRight: "10px",
        }}
      >
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: "bold",
            textAlign: "left",
            textTransform: "uppercase",
            color: "black",
            letterSpacing: "1px",
            marginBottom: "8px",
            borderBottom: "2px solid black",
          }}
        >
          CATEGORIAS
        </Typography>
        <Typography
          sx={{
            color: "#565548",
            textAlign: "left",
            fontWeight: "bold",
            fontSize: "14px",
            "&:hover, &:focus": { color: "#bdb76b" },
          }}
        >
          <SvgIcon
            sx={{
              fontSize: "8px",
              height: "100%",
              marginRight: "10px",
              marginBottom: "2px",
            }}
          >
            <CircleIcon />
          </SvgIcon>
          <Link
            href="#"
            underline="none"
            sx={{
              color: "#565548",
              textAlign: "left",
              "&:hover, &:focus": { color: "#bdb76b" },
            }}
          >
            Periféricos
          </Link>
        </Typography>
        <Typography
          sx={{
            color: "#565548",
            textAlign: "left",
            fontWeight: "bold",
            fontSize: "14px",
            "&:hover, &:focus": { color: "#bdb76b" },
          }}
        >
          <SvgIcon
            sx={{
              fontSize: "8px",
              height: "100%",
              marginRight: "10px",
              marginBottom: "2px",
            }}
          >
            <CircleIcon />
          </SvgIcon>
          <Link
            href="#"
            underline="none"
            sx={{
              color: "#565548",
              textAlign: "left",
              "&:hover, &:focus": { color: "#bdb76b" },
            }}
          >
            Audio
          </Link>
        </Typography>
        <Typography
          sx={{
            color: "#565548",
            textAlign: "left",
            fontWeight: "bold",
            fontSize: "14px",
            "&:hover, &:focus": { color: "#bdb76b" },
          }}
        >
          <SvgIcon
            sx={{
              fontSize: "8px",
              height: "100%",
              marginRight: "10px",
              marginBottom: "2px",
            }}
          >
            <CircleIcon />
          </SvgIcon>
          <Link
            href="#"
            underline="none"
            sx={{
              color: "#565548",
              textAlign: "left",
              "&:hover, &:focus": { color: "#bdb76b" },
            }}
          >
            Video
          </Link>
        </Typography>
        <Typography
          sx={{
            color: "#565548",
            textAlign: "left",
            fontWeight: "bold",
            fontSize: "14px",
            "&:hover, &:focus": { color: "#bdb76b" },
          }}
        >
          <SvgIcon
            sx={{
              fontSize: "8px",
              height: "100%",
              marginRight: "10px",
              marginBottom: "2px",
            }}
          >
            <CircleIcon />
          </SvgIcon>
          <Link
            href="#"
            underline="none"
            sx={{
              color: "#565548",
              textAlign: "left",
              "&:hover, &:focus": { color: "#v" },
            }}
          >
            Mantenimiento
          </Link>
        </Typography>
        <Typography
          sx={{
            color: "#565548",
            textAlign: "left",
            fontWeight: "bold",
            fontSize: "14px",
            "&:hover, &:focus": { color: "#bdb76b" },
          }}
        >
          <SvgIcon
            sx={{
              fontSize: "8px",
              height: "100%",
              marginRight: "10px",
              marginBottom: "2px",
            }}
          >
            <CircleIcon />
          </SvgIcon>
          <Link
            href="#"
            underline="none"
            sx={{
              color: "#565548",
              textAlign: "left",
              "&:hover, &:focus": { color: "#bdb76b" },
            }}
          >
            Accesorios
          </Link>
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: "bold",
            textAlign: "left",
            marginTop: "10px",
            textTransform: "uppercase",
            color: "black",
            letterSpacing: "1px",
            marginBottom: "8px",
            borderBottom: "2px solid black",
          }}
        >
          FILTRO PRECIO
        </Typography>
        <Slider
          getAriaLabel={() => "Minimum distance"}
          value={value1}
          sx={{
            marginTop: "40px",
            color: "#565548",
            "& .MuiSlider-valueLabel": {
              lineHeight: 1.2,
              fontSize: 9,
              background: "unset",
              padding: 0,
              width: 26,
              height: 26,
              borderRadius: "50% 50% 50% 0",
              backgroundColor: "#bdb76b",
              transformOrigin: "bottom left",
              transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
              "&:before": { display: "none" },
              "& .MuiSlider-valueLabelOpen": {
                transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
              },
              "& > *": {
                transform: "rotate(45deg)",
              },
            },
          }}
          onChange={handleChange2}
          getAriaValueText={valuetext}
          disableSwap
          marks={true}
          valueLabelDisplay="on"
          step={10}
          max={10000}
        />
      </Box>
      <Box
        sx={{
          gridColumn: "2",
          height: "100%",
          display: "grid",
          gridTemplateColumns: "repeat (4, 1fr)",
        }}
      >
        {productos.map((item, i) => {
          const column = (i % 4) + 1;
          return (
            <Item sx={{ gridColumn: `${column}`, height: "100%" }}>
              <Card producto={item} key={i} />
            </Item>
          );
        })}
      </Box>
    </Box>
  );
}

const productos = [
  {
    imagen: producto1,
    categoria: "PERIFÉRICOS / MOUSE",
    descripcion: "MOUSE REDRAGON IMPACT",
    precio: "450",
  },
  {
    imagen: producto2,
    categoria: "PERIFÉRICOS / TECLADOS",
    descripcion: "TECLADO LOGITECH K400",
    precio: "4500",
  },
  {
    imagen: producto3,
    categoria: "PERIFÉRICOS / TECLADOS",
    descripcion: "TECLADO T-DAGGER ARENA",
    precio: "4000",
  },
  {
    imagen: producto4,
    categoria: "AUDIO / PARLANTE",
    descripcion: "PARLANTE JBL GO 3",
    precio: "6500",
  },
  {
    imagen: producto1,
    categoria: "PERIFÉRICOS / MOUSE",
    descripcion: "MOUSE REDRAGON IMPACT",
    precio: "450",
  },
  {
    imagen: producto2,
    categoria: "PERIFÉRICOS / TECLADOS",
    descripcion: "TECLADO LOGITECH K400",
    precio: "4500",
  },
  {
    imagen: producto3,
    categoria: "PERIFÉRICOS / TECLADOS",
    descripcion: "TECLADO T-DAGGER ARENA",
    precio: "4000",
  },
  {
    imagen: producto4,
    categoria: "AUDIO / PARLANTE",
    descripcion: "PARLANTE JBL GO 3",
    precio: "6500",
  },
  {
    imagen: producto1,
    categoria: "PERIFÉRICOS / MOUSE",
    descripcion: "MOUSE REDRAGON IMPACT",
    precio: "450",
  },
  {
    imagen: producto2,
    categoria: "PERIFÉRICOS / TECLADOS",
    descripcion: "TECLADO LOGITECH K400",
    precio: "4500",
  },
  {
    imagen: producto3,
    categoria: "PERIFÉRICOS / TECLADOS",
    descripcion: "TECLADO T-DAGGER ARENA",
    precio: "4000",
  },
  {
    imagen: producto4,
    categoria: "AUDIO / PARLANTE",
    descripcion: "PARLANTE JBL GO 3",
    precio: "6500",
  },
  {
    imagen: producto1,
    categoria: "PERIFÉRICOS / MOUSE",
    descripcion: "MOUSE REDRAGON IMPACT",
    precio: "450",
  },
  {
    imagen: producto2,
    categoria: "PERIFÉRICOS / TECLADOS",
    descripcion: "TECLADO LOGITECH K400",
    precio: "4500",
  },
  {
    imagen: producto3,
    categoria: "PERIFÉRICOS / TECLADOS",
    descripcion: "TECLADO T-DAGGER ARENA",
    precio: "4000",
  },
  {
    imagen: producto4,
    categoria: "AUDIO / PARLANTE",
    descripcion: "PARLANTE JBL GO 3",
    precio: "6500",
  },
];
