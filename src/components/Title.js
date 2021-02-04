import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

function Title({ title }) {
  const useStyles = makeStyles({
    title: {
      marginLeft: 830,
      marginRight: -12,
    },
  });
  const classes = useStyles();

  let document = "";

  if (title !== "None") {
    document = title;
  }

  return (
    <Typography variant="h3" className={classes.title} style={{ flex: 1 }}>
      <div>{document}</div>
    </Typography>
  );
}

export default Title;
