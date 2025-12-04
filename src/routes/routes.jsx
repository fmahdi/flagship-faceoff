import { createBrowserRouter } from "react-router";
import MainLayout from "../mainLayout/MainLayout";
import HomePage from "../pages/HomePage/HomePage";
import About from "../pages/About/About";
import Favorites from "../pages/Favorites/Favorites";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PhoneDetails from "../components/PhoneDetails/PhoneDetails";

const router = createBrowserRouter([
    {
        path:"/",
        Component:MainLayout,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                index:true,
                loader:() => fetch("phones.json"),
                hydrateFallbackElement:<p>"Angel loading...</p>,
                Component:HomePage,

            },
               {
                path:"/favorites",
                Component:Favorites
            },
            {
                path:"/phoneDetails",
                Component:PhoneDetails
            },
            {
                path:"/about",
                Component:About
            }
        ]
    }
]);

export default router;