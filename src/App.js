import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/core";
import Navbar from "./components/Navbar";
import InnerTheme from "./utils/themes";
import RenderMarkdown from "./components/RenderMarkdown";
import Footer from "./components/Footer";

export const ViewerContext = React.createContext();

const FullBgStyle = {
  backgroundColor: "#003049",
  width: "100%",
  height: "100vh",
};

const App = () => {
  const [documentSelected, setDocumentSelected] = useState("");

  const handleDocChange = (event) => {
    setDocumentSelected(event.target.value);
  };

  return (
    <ViewerContext.Provider value={[documentSelected, handleDocChange]}>
      <div style={FullBgStyle}>
        <ThemeProvider theme={InnerTheme}>
          <Navbar />
          <RenderMarkdown></RenderMarkdown>
          <Footer />
        </ThemeProvider>
      </div>
    </ViewerContext.Provider>
  );
};

export default App;
