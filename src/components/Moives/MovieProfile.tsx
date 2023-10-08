import styled from 'styled-components';
import MovieDetailModal from './MovieDetailModal';
import { IMovie, makeImagePath } from '../../api';
import { useRecoilState } from 'recoil';
import { isModalOpenAtom } from '../atoms';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';


export default function MovieProfile({ poster_path, title, id }: IMovie) {
    const [isModalOpen, setIsModalOpen] = useRecoilState(isModalOpenAtom);
    const navigate = useNavigate();
    const handleProfileClick = () => {
        setIsModalOpen(prev => !prev);
        isModalOpen ? navigate(-1) : navigate(`detail/${id}`);
    }

    return (
        <>
            <PorfileWrapper
                layoutId={id + 'modal'}
                onClick={handleProfileClick}>
                <ProfileImg
                    whileHover={{ scale: 1.05 }}
                    src={makeImagePath(poster_path)} />
                <Title>{title}</Title>
            </PorfileWrapper>
            {isModalOpen &&
                <motion.div
                    layoutId='modal'
                >
                    <MovieDetailModal />
                </motion.div>
            }
        </>
    );
}

const PorfileWrapper = styled(motion.div)`
    display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
&:hover{
    cursor: pointer;
    color: var(--main-color-red);
}
`;
const ProfileImg = styled(motion.img)`
    width: 100%;
    border-radius: 1.5rem;
    margin: 1rem;
`;
const Title = styled.h2`
font-size: large;
font-weight: 600`
