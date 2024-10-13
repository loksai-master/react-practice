import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import AboutClass from "./components/aboutClass";
// import About from "./components/about";
import Header from "./components/header";
import Body from "./components/body";
import Error from "./components/error";
import RestaurantDetail from "./components/restaurantDetail";
const About = lazy(() => import("./components/about"));
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./components/userContext";
import { Provider } from "react-redux";
import Store from "./utils/reduxToolKit/store";

// --------------------- creating react element --------------------
// const element = React.createElement(
//   "p",
//   {},
//   React.createElement("span", {}, "span element...!")
// );

// --------------------- creating react element using JSX -----------
// const headingElement = <h1>super simple dev</h1>

const AppLayout = () => {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    setUserName("loksai");
  }, []);
  return (
    <UserContext.Provider value={{ user: userName, setUserName }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...!</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/city/:name/:resId",
        element: <RestaurantDetail />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={Store}>
    <RouterProvider router={appRouter} />
  </Provider>
);
