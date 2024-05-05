import { FC, useEffect, useRef, useState } from 'react';
import Sidebar from './components/Sidebar';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

interface IAppProps {
}

const DashboardLayout: FC<IAppProps> = () => {

    const navRef = useRef<any>();
    const [navHeight, setNavHeight] = useState<number>(0);

    useEffect(() => {
        const height = navRef?.current?.scrollHeight || 0;
        setNavHeight(height);
    }, []);

    return (
        <div className="h-screen w-full overflow-hidden bg-white-100">
            <div className="flex items-start h-full">
                <div className="h-full">
                    <Sidebar />
                </div>
                <div className="h-full flex-1 w-full overflow-hidden">
                    <Navbar ref={navRef} />
                    <div
                        style={{
                            height: `calc(100% - ${navHeight}px)`,
                        }}
                    >
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
