import { RouteObject, createBrowserRouter } from "react-router-dom";
import Home from "../../views/landing/Home/Home";
import About from "../../views/landing/About/About";
import { ENUM_FRONTEND_LINKS } from "../constants/linksManual";
import DashboardHome from "../../views/dashboard/DashboardHome/DashboardHome";
import DashboardLayout from "../../components/layouts/dashboard/DashboardLayout";
import Users from "../../views/dashboard/Users/Users";

// Define your routes without layout
const withoutLayout: RouteObject[] = [
    {
        path: ENUM_FRONTEND_LINKS.HOME,
        element: <Home />,
    },
    {
        path: ENUM_FRONTEND_LINKS.ABOUT,
        element: <About />,
    },
];

// Define your routes with layout
const withLayout: RouteObject[] = [
    {
        path: "/",
        element: <DashboardLayout />,
        children: [
            { path: ENUM_FRONTEND_LINKS.DASHBOARD, element: <DashboardHome /> },
            { path: ENUM_FRONTEND_LINKS.USERS, element: <Users /> },
        ],
    },
];

// Create the browser router instance
const Router = createBrowserRouter([...withoutLayout, ...withLayout]);

export default Router