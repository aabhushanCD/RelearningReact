import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Routers from "./component/router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Routers>
      <App />
    </Routers>
  </React.StrictMode>
);
