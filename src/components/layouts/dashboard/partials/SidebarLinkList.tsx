import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ILink } from '../../../../utils/interfaces/common';
import { cx } from '../../../../utils/hooks/helper';

interface IAppProps {
    item: ILink;
    isActive: boolean;
}

const SidebarLinkList: FC<IAppProps> = ({ item, isActive }) => {
    return (
        <li >
            <Link
                to={item.path}
                className={cx(
                    isActive ? "bg-main-700" : "",
                    "flex items-center  gap-2 w-full rounded-lg py-4 px-6 duration-200"
                )}
            >
                {item.logo}
                <span>{item.title}</span>
            </Link>
        </li>
    );
};

export default SidebarLinkList;
