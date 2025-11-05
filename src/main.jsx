import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./component/context/ThemeContext.jsx";
import { AppContextProvider } from "./context/AppContext.jsx";
import { ToasterContainer } from "./component/Global/Toaster.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AppContextProvider>
        <ToasterContainer />
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </AppContextProvider>
    </BrowserRouter>
  </StrictMode>
);
