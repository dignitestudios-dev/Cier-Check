import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./component/context/ThemeContext.jsx";
import { AppContextProvider } from "./context/AppContext.jsx";
import { ToasterContainer } from "./component/Global/Toaster.jsx";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
  "pk_test_51QgqnJH7kw5UclHNBR6NCUPuOo1i8KplCws8asSDjvLbqBAmwOIfEy4CZ12Khfnl98TmSZ0WDxDjIfAi9HK0xvsd00j5IyrgIA"
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AppContextProvider>
        <ToasterContainer />
        <ThemeProvider>
          <Elements stripe={stripePromise}>
            <App />
          </Elements>
        </ThemeProvider>
      </AppContextProvider>
    </BrowserRouter>
  </StrictMode>
);
