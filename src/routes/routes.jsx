import { createBrowserRouter } from "react-router";
import MainLayout from "../mainLayout/MainLayout";
import HomePage from "../pages/HomePage/HomePage";
import About from "../pages/About/About";
import Favorites from "../pages/Favorites/Favorites";

const router = createBrowserRouter([
    {
        path:"/",
        Component:MainLayout,
        errorElement:<h1>Gibon tai Bhul</h1>,
        children:[
            {
                index:true,
                Component:HomePage
            },
               {
                path:"/favorites",
                Component:Favorites
            },
            {
                path:"/about",
                Component:About
            }
        ]
    }
]);

export default router;