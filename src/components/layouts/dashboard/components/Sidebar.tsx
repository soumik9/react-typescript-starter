import { FC } from "react";
import { useLocation } from "react-router-dom";
import { logo } from "../../../../assets/getAssets";
import dashboardSidebarLinks from '../../../../utils/constants/dashboardSidebarLinks';
import SidebarLinkList from '../partials/SidebarLinkList';
import '../css/sidebar.css'

interface IAppProps {

}

const Sidebar: FC<IAppProps> = () => {

    // global
    const location = useLocation();

    return (
        <div className={` h-full w-[272px] bg-black-900 text-white overflow-auto`}>
            <div className="w-full px-4 py-6 whitespace-nowrap shrink-0">

                {/* logo */}
                <div className="flex items-center justify-between px-6">
                    <img src={logo} alt="" className="w-12" />
                    {/* <span>RPATC</span> */}
                </div>


                {/* nav items  */}
                <div className="mt-8 overflow-x-hidden">
                    <ul className="flex flex-col gap-1 text-base">
                        {dashboardSidebarLinks.map((item, index) => <SidebarLinkList
                            key={`dashlink${index}`}
                            item={item}
                            isActive={item.activePaths.includes(location.pathname)}
                        />)}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Sidebar;