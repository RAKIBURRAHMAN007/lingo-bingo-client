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
import Lesson from "../components/Lesson/Lesson";
import MyProfile from "../components/MyProfile/MyProfile";
import PrivateRoute from "./privateRoute";
import ForgetPassword from "../components/ForgetPassword/ForgetPassword";
import UpdateProfile from "../components/UpdateProfile/UpdateProfile";
import ErrorPage from "../components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
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
                element: <PrivateRoute><Tutorials></Tutorials></PrivateRoute>
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
            },
            {
                path: '/lesson/:id',
                element: <PrivateRoute><Lesson></Lesson></PrivateRoute>
               
            },
            {
                path: '/myProfile',
                element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>
            },
            {
                path: '/forgetPassword',
                element: <ForgetPassword></ForgetPassword>

            },
            {
                path: '/updateProfile',
                element: <UpdateProfile></UpdateProfile>
            }

        ]

    }

]);
export default router;