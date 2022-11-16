import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

export default function FormPropsTextFields() {
  const [name, setName] = React.useState();
  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const [apellido, setApellido] = React.useState();
  const handleChangeApellido = (event) => {
    setApellido(event.target.value);
  };
  const [mail, setMail] = React.useState();
  const handleChangeMail = (event) => {
    setMail(event.target.value);
  };
  const [mensaje, setMensaje] = React.useState();
  const handleChangeMensaje = (event) => {
    setMensaje(event.target.value);
  };
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "70%" },
        bgcolor: "white",
        borderRadius: "10px",
        padding: 2,
        height: "610px",
      }}
      noValidate
      autoComplete="off"
    >
      <Box>FORMULARIO DE CONTACTO</Box>
      <br />
      <Box>
        <TextField
          id="outlined-read-only-input"
          label="Nombre"
          value={name}
          onChange={handleChangeName}
        />
      </Box>
      <br />
      <Box>
        <TextField
          id="outlined-read-only-input"
          label="Apellido"
          value={apellido}
          onChange={handleChangeApellido}
        />
      </Box>
      <br />
      <Box>
        <TextField
          id="outlined-read-only-input"
          label="Mail"
          value={mail}
          onChange={handleChangeMail}
        />
      </Box>
      <br />
      <Box>
        <TextField
          id="outlined-read-only-input"
          label="Mensaje"
          value={mensaje}
          onChange={handleChangeMensaje}
          multiline
          rows={6}
        />
      </Box>
      <Box
        sx={{
          "& .css-w4z10b-MuiStack-root": { justifyContent: "center" },
        }}
      >
        <Button
          sx={{
            width: "70%",
            bgcolor: "#565548",
            border: "1px solid #565548",
            color: "black",
            transition: "0.5s",
            display: "inline",
            fontWeight: 'bold'
          }}
        >
          Enviar
        </Button>
      </Box>
    </Box>
  );
}
