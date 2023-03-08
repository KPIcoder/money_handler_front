import React from "react";
import { CookiesProvider } from "react-cookie";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { ColourModeProvider } from "./contexts/mode.context";
import { store } from "./redux/store";
import ThemeProvider from "./theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <CookiesProvider>
        <ColourModeProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </ColourModeProvider>
      </CookiesProvider>
    </Provider>
  </React.StrictMode>
);
