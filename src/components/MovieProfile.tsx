import styled from 'styled-components';
import { IMovie, makeImagePath } from '../api';

export default function MovieProfile({ poster_path, title }: IMovie) {
    return (
        <PorfileWrapper>
            <ProfileImg src={makeImagePath(poster_path)} />
            {title}
        </PorfileWrapper>
    );
}

const PorfileWrapper = styled.div`
    display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
const ProfileImg = styled.img`
    width: 100%;
    border-radius: 1.5rem;
    margin-bottom: 0.5rem;
`