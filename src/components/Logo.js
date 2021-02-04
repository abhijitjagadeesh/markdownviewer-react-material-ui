import React from "react";
import { Avatar, makeStyles } from "@material-ui/core";

function Logo() {
  const useStyles = makeStyles({
    avatar: {
      margin: "10px 1px",
      height: "10%",
      width: "10%",
    },
  });
  const classes = useStyles();
  return <Avatar src="./img/synamedia.jpg" className={classes.avatar} />;
}

export default Logo;
