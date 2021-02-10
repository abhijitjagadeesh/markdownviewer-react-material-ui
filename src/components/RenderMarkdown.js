import React, { useState, useEffect, useContext } from "react";
import ReactMarkdown from "react-markdown";
import { makeStyles, Typography } from "@material-ui/core";
import { ViewerContext } from "../App";

const useStyles = makeStyles((theme) => ({
  textField: {
    width: "70%",
    height: "45%",
    margin: "0 auto",
    backgroundColor: "white",
    marginTop: "50px",
    marginBottom: "100px",
    padding: "20px",
    borderRadius: "15px",
    overflow: "hidden",
    overflowY: "auto",
    borderWidth: "4px",
    borderStyle: "solid",
    borderColor: "#FEA47F",
  },
  emptyTextField: {
    width: "70%",
    margin: "0 auto",
    backgroundColor: "#FEA47F",
    marginTop: "50px",
    padding: "20px",
    borderRadius: "15px",
  },
}));

const RenderMarkdown = () => {
  const [documentSelected] = useContext(ViewerContext);
  let emptyFile = "Select A Document From The Dropdown List";
  const [data, setData] = useState(emptyFile);
  const classes = useStyles();

  useEffect(() => {
    if (documentSelected !== "") {
      fetch("documents/" + documentSelected + ".md")
        .then((response) => response.text())
        .then((text) => {
          documentSelected !== "" ? setData(text) : setData(emptyFile);
        });
    }
  }, [documentSelected]);

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
