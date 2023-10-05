import NetflixLogo from '../../assets/icons/NetflixLogo';
import { Link } from 'react-router-dom';

export default function Logo() {
    return (
        <Link to='/'>
            <NetflixLogo />
        </Link>
    );
}

