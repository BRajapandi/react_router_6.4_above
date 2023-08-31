import React from "react";
import {
  Link,
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import Home, { dataLoader } from "./Components/Home";
import Contact from "./Components/contact";
// import About from "./Components/about";
import UserDetails from "./Components/UserDetails";
import SearchParams from "./Components/SearchParams";
import { AuthProvider } from "./Components/auth";
import Profile from "./Components/Profile";
import Login from "./Components/Login";
import ValidateUser from "./ValidateUser";
const LazyAbout = React.lazy(() => import("./Components/about"));

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index loader={dataLoader} element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route
          path="about"
          element={
            <React.Suspense fallback="Loading...">
              <LazyAbout />
            </React.Suspense>
          }
        />
        <Route path="user/:id" element={<UserDetails />} />
        <Route path="/search-params" element={<SearchParams />} />
        <Route
          path="profile"
          element={
            <ValidateUser>
              <Profile />
            </ValidateUser>
          }
        />
        <Route path="login" element={<Login />} />
      </Route>
    )
  );
  return (
    <div>
      {/* Authentication and Protected Routes */}
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  );
}

export default App;

const Root = () => {
  return (
    <>
      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to={`/user/${Math.floor(Math.random() * 25)}`}>UserDetails</Link>
        <Link to="/search-params?name=raja">Search params</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/login">Login</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};
