import { createHashRouter } from "react-router-dom";
import { Home, Login, Register } from "../pages";

const router  = createHashRouter([
    {
        path:"/",
        element: Login()
    },
    {
        path:"/register",
        element: Register()
    },
    {
        path: "/home",
        element: Home()
    }
    // {
    //     path:"*",
    //     element: Register()
    // },
])

export {router}