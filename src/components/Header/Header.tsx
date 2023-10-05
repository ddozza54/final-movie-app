import styled from "styled-components";
import Logo from "./Logo";
import Nav from "./Nav";

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
