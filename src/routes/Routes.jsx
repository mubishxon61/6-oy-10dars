import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "../loyouts/MainLayout"
import Home from "../pages/Home"
function Routes() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <MainLayout />,
            children: [
                {
                    index: true,
                    element: <Home />
                }
            ]
        }
    ])
  return <RouterProvider router={router} />
}

export default Routes