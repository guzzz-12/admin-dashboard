import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {createTheme, StyledEngineProvider, ThemeProvider} from "@mui/material";
import App from "./App";
import Layout from "./components/Layout";
import {store} from "./redux/store";

const theme = createTheme({
  typography: {
    h1: {fontSize: "var(--heading-1)"},
    h2: {fontSize: "var(--heading-2)"},
    h3: {fontSize: "var(--heading-3)"},
    h4: {fontSize: "var(--heading-4)"},
    h5: {fontSize: "var(--heading-5)"},
    body1: {fontSize: "var(--paragraph)"},
    button: {fontSize: "var(--paragraph)"},
    subtitle1: {fontSize: "var(--text-small)"},
    allVariants: {
      fontFamily: "Nunito, sans-serif"
    }
  }
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Layout>
            <App />
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </StyledEngineProvider>
  </Provider>
);