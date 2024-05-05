import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ENUM_FRONTEND_LINKS } from '../../../utils/constants/linksManual';

interface IAppProps {
}

const About: FC<IAppProps> = () => {
    return (
        <>
            <p>this is about page</p>
            <Link to={ENUM_FRONTEND_LINKS.HOME}>Go to home page</Link>
        </>
    );
};

export default About;
