import { Box, Link, Slider, SvgIcon, Typography } from "@mui/material";
import * as React from "react";
import CircleIcon from "@mui/icons-material/Circle";

function valuetext(value) {
  return `${value}°C`;
}

const minDistance = 10;

export default function Tienda() {
  const [value2, setValue2] = React.useState([20, 37]);

  const handleChange2 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setValue2([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue2([clamped - minDistance, clamped]);
      }
    } else {
      setValue2(newValue);
    }
  };

  return (
    <Box
      sx={{ height: "100%", display: "grid", gridTemplateColumns: "1fr 3fr" }}
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
              "&:hover, &:focus": { color: "#bdb76b" },
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
          getAriaLabel={() => "Minimum distance shift"}
          value={value2}
          onChange={handleChange2}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          disableSwap
        />
      </Box>
    </Box>
  );
}
