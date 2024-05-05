import { FC } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { cx } from '../../../../utils/hooks/helper';

interface IAppProps {
    showAVDropdown: boolean;
    setShowAVDropdown: (showAVDropdown: boolean) => void;
}
const chevronCmnCls = "trans cursor-pointer text-gray-500 group-hover:text-gray-700";

const NavbarChevron: FC<IAppProps> = ({ showAVDropdown, setShowAVDropdown, }) => {
    return (
        <>
            {showAVDropdown ? <div onClick={() => setShowAVDropdown(!showAVDropdown)}>
                <BsChevronUp className={cx(chevronCmnCls)} />
            </div> : <div onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                e.stopPropagation();
                setShowAVDropdown(true);
            }}>
                <BsChevronDown className={cx(chevronCmnCls)} />
            </div>}
        </>
    );
};

export default NavbarChevron;
