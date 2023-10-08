import styled from "styled-components";
import { XMarkIcon } from "../../assets/icons/XMarkIcon";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isModalOpenAtom } from "../atoms";
import { useQuery } from "@tanstack/react-query";
import { Genre, ProductionCountry, getMovie, makeImagePath } from "../../api";
import { Link, useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";

export default function MovieDetailModal() {
    // const modalRef = useRef(null);
    const { id } = useParams();
    const navigate = useNavigate();
    const isModalOpen = useRecoilValue(isModalOpenAtom);
    const setIsModalOpen = useSetRecoilState(isModalOpenAtom);
    const handleModalClose = () => {
        setIsModalOpen(prev => !prev)
        isModalOpen ? navigate('../') : navigate(-1);
    }
    const { isLoading, data } = useQuery({
        queryKey: ['movieDetail', id],
        queryFn: () => getMovie(`${id}`)
    })

    return (
        isLoading ? <span>Loading...</span> :
            <MovieModal
                key={id + "modal"}
                layoutId={id + 'modal'}
                imgpath={makeImagePath(data.poster_path)} >
                <CloseButton onClick={handleModalClose}>
                    <XMarkIcon />
                </CloseButton>
                <DetailBox>
                    <Title>{data.title} ({data.release_date.slice(0, 4)})</Title>
                    <Text>별점: {data.vote_average.toFixed(1)}</Text>

                    <TextBox>
                        <Text>장르: </Text>
                        {data.genres?.map((genre: Genre, i: number) => <ItemSpans
                            key={data.id + 'genre' + i}
                        >{genre.name}</ItemSpans>)}
                    </TextBox>
                    <Text>상영시간: {data.runtime}분</Text>
                    <TextBox>
                        <Text>국가:</Text>
                        {data.production_countries.map((contry: ProductionCountry, i: number) =>
                            <ItemSpans
                                key={data.id + 'contry' + i}
                            >{contry.name}</ItemSpans>)}
                    </TextBox>
                    <Text>{data.overview}</Text>
                    {data.homepage && <LinkText target="_blank" to={data.homepage}>👉공식 홈페이지</LinkText>}
                </DetailBox>
            </MovieModal >
    )
}

const MovieModal = styled(motion.div) <{ imgpath: string }>`
    width: 70%;
    height: 80%;
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
    bottom: 10%;
padding: 1rem;
`
const Title = styled.h1`
    font-size: xx-large;
    font-weight: 800;
    margin-bottom: 1rem;
`
const TextBox = styled.div`
    display: flex;
    justify-content: flex-starts;
    align-items: center;
`
const ItemSpans = styled.span`
    margin-left: 0.3rem;
`
const Text = styled.span`
font-size: large;
margin-bottom: 0.5rem;
`;
const LinkText = styled(Link)`
    color: white;
`