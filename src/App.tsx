import {Suspense, lazy} from "react";
import {Routes, Route} from "react-router-dom";
import Spinner from "./components/Spinner";
import ThemeSwitch from "./components/ThemeSwitch";
import "./App.css";

const HomePage = lazy(() => import("./pages/home"));
const LoginPage = lazy(() => import("./pages/login"));
const SignupPage = lazy(() => import("./pages/signup"));
const UsersPage = lazy(() => import("./pages/users"));
const UserPage = lazy(() => import("./pages/user"));
const ProductsPage = lazy(() => import("./pages/products"));
const NewItemPage = lazy(() => import("./pages/newItem"));

const App = () => {
  return (
    <>
      <ThemeSwitch />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/signup" element={<SignupPage />}/>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/users">
            <Route index element={<UsersPage />} />
            <Route path=":userId" element={<UserPage />}/>
          </Route>
          <Route path="/products">
            <Route index element={<ProductsPage />} />
            {/* <Route path=":productId" element={<SingleItemPage />} /> */}
            <Route path="new" element={<NewItemPage />} />
          </Route>
          <Route path="*" element={<h3>Page not found</h3>}/>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;