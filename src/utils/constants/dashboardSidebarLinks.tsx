import SidebarDefaultSvg from "../../components/icons/SidebarDefaultSvg";
import { ILink } from "../interfaces/common";
import { ENUM_FRONTEND_LINKS } from "./linksManual";

const dashboardSidebarLinks: ILink[] = [
    {
        path: ENUM_FRONTEND_LINKS.DASHBOARD,
        title: 'Dashboard',
        logo: <SidebarDefaultSvg />,
        activePaths: [
            ENUM_FRONTEND_LINKS.DASHBOARD
        ]
    }, {
        path: ENUM_FRONTEND_LINKS.USERS,
        title: 'Users',
        logo: <SidebarDefaultSvg />,
        activePaths: [
            ENUM_FRONTEND_LINKS.USERS
        ]
    },
]

export default dashboardSidebarLinks;