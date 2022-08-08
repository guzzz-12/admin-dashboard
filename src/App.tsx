import {Suspense, lazy} from "react";
import {Routes, Route} from "react-router-dom";
import {createTheme, ThemeProvider} from "@mui/material";
import "./App.css";

const HomePage = lazy(() => import("./pages/home"));
const Userspage = lazy(() => import("./pages/users"));
const ProductsPage = lazy(() => import("./pages/products"));
const LoginPage = lazy(() => import("./pages/login"));
const SignupPage = lazy(() => import("./pages/signup"));
const NewItemPage = lazy(() => import("./pages/newItem"));
const SingleItemPage = lazy(() => import("./pages/single"));

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

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<h5>Loading...</h5>}>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/signup" element={<SignupPage/>}/>
          <Route path="/users">
            <Route index element={<Userspage />} />
            <Route path=":userId" element={<SingleItemPage />}/>
          </Route>
          <Route path="/products">
            <Route index element={<ProductsPage />} />
            <Route path=":productId" element={<SingleItemPage />} />
            <Route path="new" element={<NewItemPage />} />
          </Route>
          <Route path="*" element={<h3>Page not found</h3>}/>
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;