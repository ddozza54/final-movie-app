import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import styled from 'styled-components';

export default function Nav() {
    const { pathname } = useLocation();
    return (
        <nav>
            <NavUl>
                <NavItem>
                    <NavLink to='/'>POPLAR</NavLink>
                    {pathname === '/' && <Circle layoutId='circle' />}
                </NavItem>
                <NavItem>
                    <NavLink to='/coming-soon'>COMMING SOON</NavLink>
                    {pathname === '/coming-soon' && <Circle layoutId='circle' />}
                </NavItem>
                <NavItem>
                    <NavLink to='/now-playing'>NOW PLAYING</NavLink>
                    {pathname === '/now-playing' && <Circle layoutId='circle' />}
                </NavItem>
            </NavUl>
        </nav>);
}

const NavUl = styled.nav`
height: 5rem;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
`;
const NavItem = styled.li`
text-decoration: none;
margin: 1rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
const NavLink = styled(Link)`
    text-decoration: none;
`;

const Circle = styled(motion.div)`
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: var(--main-color-red);
    position: relative;
    top: 1rem;
`

