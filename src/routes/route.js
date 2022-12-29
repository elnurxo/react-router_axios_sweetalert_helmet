import MainRoot from "../components/MainRoot";
import Add from "../pages/Add";
import DataDetails from "../pages/DataDetails";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

const ROUTES = [
    {
        path: '/',
        element: <MainRoot/>,
        children: [
            {
                path: "",
                element: <Home/>
            },
            {
                path: "add",
                element: <Add/>
            },
            {
                path:":id",
                element: <DataDetails/>
            },
            {
                path:"*",
                element: <NotFound/>
            }
        ]
    }
]

export default ROUTES