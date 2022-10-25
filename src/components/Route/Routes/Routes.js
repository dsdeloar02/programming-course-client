import { createBrowserRouter } from "react-router-dom";
import Main from "../../../layouts/Main";
import Course from "../../Courses/Course";
import Home from "../../Home/Home";

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
            }
        ]
    }
])