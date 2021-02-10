import React, { useContext } from "react";
import { Typography } from "@material-ui/core";
import { ViewerContext } from "../App";

function Title() {
  const [documentSelected] = useContext(ViewerContext);

  return (
    <Typography
      variant="h3"
      style={{ flexGrow: 1, color: "#FEA47F" }}
      align="center"
    >
      <div>{documentSelected !== "None" ? documentSelected : ""}</div>
    </Typography>
  );
}

export default Title;
