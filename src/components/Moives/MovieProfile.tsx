import styled from 'styled-components';
import { IMovie, makeImagePath } from '../../api';
import { useRecoilState } from 'recoil';
import { isModalOpenAtom } from '../atoms';
import MovieDetail from './MovieDetail';
import { useNavigate } from 'react-router-dom';

export default function MovieProfile({ poster_path, title, id }: IMovie) {
    const [isModalOpen, setIsModalOpen] = useRecoilState(isModalOpenAtom);
    const navigate = useNavigate();
    const handleProfileClick = () => {
        setIsModalOpen(prev => !prev)
        navigate(`detail/${id}`);
    }

    return (
        <>
            <PorfileWrapper onClick={handleProfileClick}>
                <ProfileImg src={makeImagePath(poster_path)} />
                {title}
            </PorfileWrapper>
            {isModalOpen && <MovieDetail />}
        </>
    );
}

const PorfileWrapper = styled.div`
    display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
&:hover{
    cursor: pointer;
}
`;
const ProfileImg = styled.img`
    width: 100%;
    border-radius: 1.5rem;
    margin-bottom: 0.5rem;
`