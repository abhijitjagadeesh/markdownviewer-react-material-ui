import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/core";
import Navbar from "./components/Navbar";
import InnerTheme from "./utils/themes";
import RenderMarkdown from "./components/RenderMarkdown";

const App = () => {
  const [documentSelected, setDocumentSelected] = useState("");

  const handleChange = (event) => {
    setDocumentSelected(event.target.value);
  };

  return (
    <div
      style={{
        backgroundColor: "#003049",
        width: "100%",
        height: "100vh",
        overflowY: "auto",
      }}
    >
      <ThemeProvider theme={InnerTheme}>
        <Navbar
          documentSelected={documentSelected}
          handleChange={handleChange}
        />
        <RenderMarkdown render={documentSelected}></RenderMarkdown>
      </ThemeProvider>
    </div>
  );
};

export default App;
