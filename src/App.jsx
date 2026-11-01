import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Mainlayout from "./layout/Mainlayout";

function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout />,
      children: [
        { index:true, element: <Home /> },
        { path: "/products", element: <Products /> },
      ]
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
