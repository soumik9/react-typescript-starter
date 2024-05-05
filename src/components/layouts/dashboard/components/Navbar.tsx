import { FC, Ref, useState } from 'react';
import { logo } from "../../../../assets/getAssets";
import UserDropdown from '../partials/UserDropdown';
import { useDetectClickOutside } from 'react-detect-click-outside';
import NavbarChevron from '../partials/NavbarChevron';

interface IAppProps {
    ref: Ref<any>;
}

const Navbar: FC<IAppProps> = ({ ref }) => {

    // states
    const [showAVDropdown, setShowAVDropdown] = useState<boolean>(false);

    // dropdown close to detect click outside
    const closeDropdown = () => setShowAVDropdown(false);
    const outSideRef = useDetectClickOutside({ onTriggered: closeDropdown });

    return (
        <header className="px-6 py-4 bg-green-300" ref={outSideRef}>
            <nav className="flex items-center justify-end">
                <div></div>
                <div className="hs-dropdown relative inline-flex [--placement:bottom-right]">
                    <div
                        id="hs-dropdown-left-but-right-on-lg"
                        role='button'
                        className="hs-dropdown-toggle inline-flex items-center gap-3"
                        onClick={() => setShowAVDropdown(!showAVDropdown)}
                        ref={ref}
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 border rounded-full overflow-hidden">
                                <img
                                    src={logo}
                                    alt="auth"
                                    className="w-10 h-10 object-cover"
                                />
                            </div>
                            <div className="flex flex-col text-left">
                                <h4 className="text-sm font-semibold">Netro</h4>
                                <span className="text-sm  text-black-300">অ্যাডমিন</span>
                            </div>
                        </div>

                        {/* dropdown */}
                        <NavbarChevron
                            showAVDropdown={showAVDropdown}
                            setShowAVDropdown={setShowAVDropdown}
                        />

                        <UserDropdown
                            showAVDropdown={showAVDropdown}
                            setShowAVDropdown={setShowAVDropdown}
                        />
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;