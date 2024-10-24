import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import Homee from "../page/homee/Homee";
  import Productt from "../page/product/Productt";
  import Product from "../components/product/Product";
  import Cart from "../components/cart/Cart";
  import AddItems from '../components/addItems/AddItems'
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Homee/>
    },
    {
      path: "/products",
      element: <Productt/>,
    },
    {
      path: "/products/:id",
      element: <Product />,
      // exact: true, // to prevent nested routes from rendering on the same path
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/addItems",
      element: <AddItems />,
    }
  ]);
  
export default function Routing() {
    return (
      <RouterProvider router={router} />
    )
  }