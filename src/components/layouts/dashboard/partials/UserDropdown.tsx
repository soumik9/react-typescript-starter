import { FC } from "react";
import { cx } from "../../../../utils/hooks/helper";

interface IAppProps {
    showAVDropdown: boolean;
    setShowAVDropdown: (showAVDropdown: boolean) => void;
}

const UserDropdown: FC<IAppProps> = ({ showAVDropdown }) => {
    return (
        <div
            id="avDropdown"
            className={cx(
                showAVDropdown ? "block" : "hidden",
                "absolute z-50 mt-36 rounded-md shadow-lg w-48 right-0 py-1  bg-white"
            )}
        >
            <ul className="mt-2">
                <li>
                    <button
                        className={cx(
                            "block px-4 py-2 text-sm leading-5 trans w-full text-start text-gray-500 hover:text-gray-600 hover:bg-gray-100"
                        )}>
                        Logout
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default UserDropdown