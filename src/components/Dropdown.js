import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { ViewerContext } from "../App";
import documents from "./documents.json";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
    backgroundColor: "#222",
    justifyContent: "right",
    alignItems: "right",
  },
  menu: {
    width: 200,
  },
}));

function Dropdown() {
  const [documentSelected, handleDocChange] = useContext(ViewerContext);
  const classes = useStyles();

  return (
    <form className={classes.container}>
      <TextField
        id="outlined-select-document"
        select
        label={documentSelected === "" ? "Select a Document" : ""}
        className={classes.textField}
        value={documentSelected}
        onChange={handleDocChange}
        InputLabelProps={{ shrink: false }}
        SelectProps={{
          MenuProps: {
            className: classes.menu,
          },
        }}
        margin="normal"
        variant="outlined"
      >
        {documents.map((document) => (
          <MenuItem key={document.value} value={document.value}>
            {document.label}
          </MenuItem>
        ))}
      </TextField>
    </form>
  );
}

export default Dropdown;
