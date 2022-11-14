import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "./Button";

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
        "& .MuiTextField-root": { m: 1, width: "80ch" },
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
      <Box sx={{
        display: 'center'
      }}>
        <Button />
      </Box>
    </Box>
  );
}
