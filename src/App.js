import React, { useState } from "react";
import { ThemeProvider, Typography } from "@material-ui/core";
import Navbar from "./components/Navbar";
import Theme from "./utils/themes";
import RenderMarkdown from "./components/RenderMarkdown";

const App = () => {
  const [documentSelected, setDocumentSelected] = useState("");

  const handleChange = (event) => {
    setDocumentSelected(event.target.value);
  };

  return (
    <ThemeProvider theme={Theme}>
      <Navbar documentSelected={documentSelected} handleChange={handleChange} />
      <Typography style={{ marginTop: 200 }} /*component={"span"}*/>
        <RenderMarkdown
          render={documentSelected}
          style={{ marginTop: 200 }}
        ></RenderMarkdown>
      </Typography>
    </ThemeProvider>
  );
};

export default App;
