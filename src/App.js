import * as React from "react";
import { createRoot } from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Login from "./pages/Login";
import Task from "./pages/Task";
import Location from "./pages/Location";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/Task",
    element: <Task />,
  },
  {
    path: "/Location",
    element: <Location />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
