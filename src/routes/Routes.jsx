import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "../loyouts/MainLayout"
import {CreateUser, Home, UserInfo} from "../pages"
function Routes() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <MainLayout />,
            children: [
                {
                    index: true,
                    element: <Home />
                },
                {
                    path: "/create-user",
                    element: <CreateUser />
                },
                {
                    path: "/user-info/:id",
                    element: <UserInfo />
                },
                {
                    path: "*",
                    element: <h1>Bunday sahifa hali mavjud emas!!!</h1>
                }
            ]
        }
    ])
  return <RouterProvider router={router} />
}

export default Routes