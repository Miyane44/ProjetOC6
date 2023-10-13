import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from "./App";
import About from "./pages/About";
  
  const router = createBrowserRouter([
    {
        path: '/',
        element: (<Home />),
    },
    {
        path: '/about',
        element: (<About />)
    }

]);

createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
  );