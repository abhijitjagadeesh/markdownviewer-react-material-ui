import React from "react";
import { makeStyles } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

const documents = [
  {
    value: "Document1",
    label: "Document1",
  },
  {
    value: "Document2",
    label: "Document2",
  },
  {
    value: "Document3",
    label: "Document3",
  },
];

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
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "#FEA47F",
  },
  menu: {
    width: 200,
  },
}));

function Dropdown2({ docSelected, onChange }) {
  const classes = useStyles();

  return (
    <form className={classes.container} /*noValidate autoComplete="off"*/>
      <TextField
        id="outlined-select-document"
        select
        label={docSelected === "" ? "Select a Document" : ""}
        className={classes.textField}
        value={docSelected}
        onChange={onChange}
        InputLabelProps={{ shrink: false }}
        SelectProps={{
          MenuProps: {
            className: classes.menu,
          },
        }}
        margin="normal"
        variant="outlined"
      >
        {documents.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </form>
  );
}

export default Dropdown2;
