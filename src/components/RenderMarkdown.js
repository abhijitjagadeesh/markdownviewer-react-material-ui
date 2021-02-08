import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  textField: {
    width: "70%",
    margin: "0 auto",
    backgroundColor: "white",
    marginTop: "50px",
    padding: "20px",
    borderRadius: "15px",
  },
  emptyTextField: {
    width: "70%",
    margin: "0 auto",
    backgroundColor: "white",
    marginTop: "50px",
    padding: "20px",
    borderRadius: "15px",
  },
}));

const RenderMarkdown = ({ render }) => {
  let emptyFile = "Select A Document From The Dropdown List";
  const [data, setData] = useState(emptyFile);
  const classes = useStyles();

  fetch("documents/" + render + ".md")
    .then((response) => response.text())
    .then((text) => {
      if (render !== "") {
        setData(text);
      } else {
        setData(emptyFile);
      }
    });

  if (data === emptyFile) {
    return (
      <Typography variant="h3" align="center">
        <div className={classes.emptyTextField}>{emptyFile}</div>
      </Typography>
    );
  }

  return (
    <div className={classes.textField}>
      <ReactMarkdown source={data} escapeHtml={false} />
    </div>
  );
};

export default RenderMarkdown;
