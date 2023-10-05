import styled from "styled-components";
import Logo from "./Header/Logo";
import Nav from "./Header/Nav";

export default function Header() {
    return (
        <HeaderWrapper>
            <Logo />
            <Nav />
        </HeaderWrapper>
    );
}

const HeaderWrapper = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
align-items: center;
`;
