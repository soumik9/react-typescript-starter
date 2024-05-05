import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ENUM_FRONTEND_LINKS } from '../../../utils/constants/linksManual';

interface IAppProps {
}

const Home: FC<IAppProps> = () => {
    return (
        <>
            <h1>this home page</h1>
            <Link to={ENUM_FRONTEND_LINKS.ABOUT}>Go to about page</Link>
            <br />
            <Link to={ENUM_FRONTEND_LINKS.DASHBOARD} className='text-main-700 text-[22px] underline'>Go to dashboard</Link>
        </>
    );
};

export default Home;

