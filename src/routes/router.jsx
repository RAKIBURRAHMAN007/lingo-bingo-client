import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../components/Home/Home";
import Tutorials from "../components/Tutorials/Tutorials";
import AboutUs from "../components/AboutUs/AboutUs";
import Learning from "../components/Learning/Learning";
import LoginPage from "../components/LoginPage/LoginPage";
import RegisterFrom from "../components/RegisterFrom/RegisterFrom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {

                path: '/',
                element: <Home></Home>

            },
            
            {
                path: '/learning',
                element: <Learning></Learning>
            },
            {
                path: '/tutorials',
                element: <Tutorials></Tutorials>
            },
            {
                path: '/aboutUs',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/login',
                element: <LoginPage></LoginPage>
            },
            {
                path: '/register',
                element: <RegisterFrom></RegisterFrom>
            }

        ]

    }

]);
export default router;