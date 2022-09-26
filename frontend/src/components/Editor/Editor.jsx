import React, { useEffect, useState } from "react";
import PdfViewer from "../PdfViewer/PdfViewer";
import { useLocation } from "react-router-dom";

function Editor() {
  const nm = "Miniproject";
  const [req, setReq] = useState("");
  const location = useLocation();
  useEffect(() => {
    // alert(location.state.name);
    setReq(location.state.name);
    // alert(req)
  }, []);

  return (
    <div className="PDF-viewer">
      <PdfViewer document={location.state.name === nm ? "doc.pdf" : "document.pdf"} />
    </div>
  );
}

export default Editor;
