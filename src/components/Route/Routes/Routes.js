import { createBrowserRouter } from "react-router-dom";
import Main from "../../../layouts/Main";
import Blogs from "../../Blogs/Blogs";
import Cart from "../../Cart/Cart";
import Category from "../../category/Category";
import Course from "../../Courses/Course";
import FAQ from "../../FAq/FAQ";
import Home from "../../Home/Home";
import Login from "../../Login/Login";
import NotFound from "../../NotFound/NotFound";
import Register from "../../Register/Register";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

export const routes = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        children:[
            {
                path : '/',
                loader : () => fetch('https://programming-tech.vercel.app/teammembers'),
                element : <Home></Home>
            },
            {
                path : '/course',
                loader : () => fetch ('https://programming-tech.vercel.app/courses'),
                element : <Course></Course>
            },
            {
                path : '/category/:id',
                loader: ({params}) => fetch(`https://programming-tech.vercel.app/category/${params.id}`),
                element:<Category></Category>
            },
            {
                path : '/cart/:id',
                loader : ({params}) => fetch(`https://programming-tech.vercel.app/cart/${params.id}`),
                element : <PrivateRoutes><Cart></Cart></PrivateRoutes>
            },
            {
                path : '/login',
                element : <Login></Login>
            },
            {
                path : '/register',
                element : <Register></Register>
            },
            {
                path : '/*',
                element : <NotFound></NotFound>
            },
            {
                path : '/blogs',
                element : <Blogs></Blogs>
            },

            {
                path : '/faq',
                element : <FAQ></FAQ>,
            }
        ]
    }
])