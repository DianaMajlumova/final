import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Add from "../Pages/Add/Add";
import Detail from "../Pages/Detail/Detail";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/add",
    element: <Add />,
  },
  {
    path: "/detail/:_id",
    element: <Detail />,
  },
]);
export default router;
