import React from "react";
import { Typography } from "@material-ui/core";

function Title({ title }) {
  let document = "";

  if (title !== "None") {
    document = title;
  }

  return (
    <Typography
      variant="h3"
      style={{ flexGrow: 1, color: "#FEA47F" }}
      align="center"
    >
      <div>{document}</div>
    </Typography>
  );
}

export default Title;
