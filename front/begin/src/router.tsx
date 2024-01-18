import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "./views/Login";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import Blog from "./views/Blog";
import Profile from "./views/Profile";
import NotFound from "./views/NotFound";
import Home from "./views/Home";
import NotFoundLayout from "./components/NotFoundLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/profile",
                element: <Profile />
            },
            {
                path: "/blog",
                element: <Blog />
            }
        ]
    },
    {
        path: "/",
        element: <GuestLayout />,
        children: [
            {
                path: "/login",
                element: <Login />
            }
        ]
    },
    {
        path: "*",
        element: <NotFoundLayout />,
        children: [
            {
                path: '*',
                element: <NotFound />
            }
        ]
    }
])

export default router