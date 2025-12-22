
import {createBrowserRouter} from "react-router-dom"
import Wrapper from "./Wrapper"
import LandingPage from "../Pages/LandingPage"
import Login from "../Pages/Login"

export const router=createBrowserRouter([
    {
        path:"/",
        element:<Wrapper/>,
        children:[
            {
                index:true,
                element:<LandingPage/>
            },{
                path:"/login",
                element:<Login/>
            },{
                path:"/signup",
                element:<Login/>
            }
        ]
    }
])
