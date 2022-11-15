import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    //paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

export default function SearchAppBar({
  placeholder = "Buscar...",
  icon = <SearchIcon />,
  positionIcon = "left",
}) {
  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "white",
        borderRadius: 5,
        marginLeft: 0,
        width: "100%",
        display: "grid",
        gridTemplateColumns: positionIcon === "left" ? "1fr 5fr" : "5fr 1fr",
      }}
    >
      {positionIcon === "left" && (
        <IconButton
          sx={{
            paddingLeft: 2,
            marginRight: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {icon}
        </IconButton>
      )}

      <StyledInputBase
        placeholder={placeholder}
        inputProps={{ "aria-label": "search" }}
        sx={{marginLeft: positionIcon === "left" ? '10px' : '20px'}}
      />

      {positionIcon !== "left" && (
        <IconButton
          sx={{
            paddingLeft: 2,
            marginRight: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {icon}
        </IconButton>
      )}
    </Box>
  );
}
