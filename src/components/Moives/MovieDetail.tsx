import styled from "styled-components";
import { XMarkIcon } from "../../assets/icons/XMarkIcon";
import { useSetRecoilState } from "recoil";
import { isModalOpenAtom } from "../atoms";
import { useQuery } from "@tanstack/react-query";
import { Genre, ProductionCountry, getMovie, makeImagePath } from "../../api";
import { Link, useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";

export default function MovieDetail() {
    // const modalRef = useRef(null);
    const { id } = useParams();
    const navigate = useNavigate();
    const setIsModalOpen = useSetRecoilState(isModalOpenAtom);
    const handleModalClose = () => {
        setIsModalOpen(prev => !prev)
        navigate(-1);
    }
    const { isLoading, data } = useQuery({
        queryKey: ['movieDetail', id],
        queryFn: () => getMovie(`${id}`)
    })
    return (
        isLoading ? <span>Loading...</span> :
            <MovieModal
                layoutId='movieProfile'
                imgpath={makeImagePath(data.poster_path)}>
                <CloseButton onClick={handleModalClose}>
                    <XMarkIcon />
                </CloseButton>
                <DetailBox>
                    <h1>{data.title}</h1>
                    {data.homepage && <Link target="_blank" to={data.homepage}>영화 홈페이지</Link>}
                    <div>
                        <h3>Genres</h3>
                        {data.genres?.map((genre: Genre) => <span>{genre.name}</span>)}
                    </div>
                    <span>{data.runtime}분</span>
                    <span>{data.release_date.slice(0, 4)}</span>
                    <span>{data.overview}</span>
                    <span>국가</span>
                    {data.production_countries.map((contry: ProductionCountry) => <span>{contry.name}</span>)}
                    <span>{data.vote_average}</span>
                </DetailBox>
            </MovieModal>
    )
}

const MovieModal = styled(motion.div) <{ imgpath: string }>`
    width: 30rem;
    height: 40rem;
    position: fixed;
    background-color: var(--main-color-red);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    border-radius: 2rem;
overflow: hidden;
background: linear-gradient(
            to bottom,
            rgba(20, 20, 20, 0) 10%,
            rgba(20, 20, 20, 0.20) 25%,
            rgba(20, 20, 20, 0.8) 50%,
            rgba(20, 20, 20, 0.95) 75%,
            rgba(20, 20, 20, 1) 100%
          ), url(${(props) => props.imgpath});
  background-size: 100%;
`;
const CloseButton = styled.button`
border: none;
width: 3rem;
height: 3rem;
position: absolute;
top:0;
right: 0;
&:hover{
    cursor: pointer;
}`;

const DetailBox = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    color: white;
    bottom: 30%;
padding: 1rem;
`

