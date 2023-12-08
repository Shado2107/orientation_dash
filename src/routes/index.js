import { createHashRouter } from "react-router-dom";
import { Login, Register } from "../pages";

const router  = createHashRouter([
    {
        path:"/",
        element: Login()
    },
    {
        path:"/register",
        element: Register()
    },
    // {
    //     path:"*",
    //     element: Register()
    // },
])

export {router}