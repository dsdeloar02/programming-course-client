import { createBrowserRouter } from "react-router-dom";
import Main from "../../../layouts/Main";
import Cart from "../../Cart/Cart";
import Category from "../../category/Category";
import Course from "../../Courses/Course";
import Home from "../../Home/Home";
import Login from "../../Login/Login";
import Register from "../../Register/Register";

export const routes = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        children:[
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : '/course',
                loader : () => fetch ('http://localhost:5000/courses'),
                element : <Course></Course>
            },
            {
                path : '/category/:id',
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`),
                element:<Category></Category>
            },
            {
                path : '/cart/:id',
                loader : ({params}) => fetch(`http://localhost:5000/cart/${params.id}`),
                element : <Cart></Cart>
            },
            {
                path : '/login',
                element : <Login></Login>
            },
            {
                path : '/register',
                element : <Register></Register>
            }
        ]
    }
])