import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Layout from "./layouts/Layout";
import Landing from "./pages/Landing";



export default function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [{
        path: "/",
        element: <Landing/>
      }]
    }
  ])

  return   <RouterProvider router={router} />
  

}
