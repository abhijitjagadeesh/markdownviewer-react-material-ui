import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import Logo from "./Logo";
import Title from "./Title";
import Dropdown from "./Dropdown";

const Navbar = ({ documentSelected, handleChange }) => {
  return (
    <>
      <AppBar color="primary">
        <Toolbar>
          <Logo />
          <Title title={documentSelected} />
          <Dropdown docSelected={documentSelected} onChange={handleChange} />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
