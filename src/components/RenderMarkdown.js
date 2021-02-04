import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

const RenderMarkdown = ({ render }) => {
  const [data, setData] = useState("");

  fetch("documents/" + render + ".md")
    .then((response) => response.text())
    .then((text) => {
      if (render !== "") {
        setData(text);
      } else {
        setData("");
      }
    });

  return <ReactMarkdown source={data} escapeHtml={false} />;
};

export default RenderMarkdown;
