import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function ErrorPage() {
    return (
        <WrongPage>
            <Image src='src/assets/imgs/errorDdozza.png' />
            <span>Wrong Page..!</span>
            <Link to='/'>👉Back to Home</Link>
        </WrongPage>
    );
}
const WrongPage = styled.section`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
const Image = styled.img`
    width: 60%;
    height: 60%;
`

