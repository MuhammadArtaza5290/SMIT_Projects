import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import Homee from "../page/homee/Homee";
  import Productt from "../page/product/Productt";

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Homee/>
    },
    {
      path: "/products",
      element: <Productt/>,
    },
  ]);
  
export default function Routing(params) {
    return (
      <RouterProvider router={router} />
    )
  }