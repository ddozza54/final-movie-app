import styled from "styled-components";
import { XMarkIcon } from "../../assets/icons/XMarkIcon";
import { useSetRecoilState } from "recoil";
import { isModalOpenAtom } from "../atoms";
import { useQuery } from "@tanstack/react-query";
import { getMovie } from "../../api";
import { useNavigate, useParams } from "react-router-dom";

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
        queryKey: ['movieDetail'],
        queryFn: () => getMovie(`${id}`)
    })
    console.log(data)

    return (
        isLoading ? <span>Loading...</span> :
            <MovieModal >
                <CloseButton onClick={handleModalClose}>
                    <XMarkIcon />
                </CloseButton>
                <h1>{data.title}</h1>
            </MovieModal>
    )
}

const MovieModal = styled.div`
    width: 30rem;
    height: 40rem;
    position: fixed;
    background-color: cornflowerblue;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 2rem;
    background-image: url(data.poster_path);
    background-size: 100%;
`;
const CloseButton = styled.button`
border: none;
width: 3rem;
height: 3rem;
&:hover{
    cursor: pointer;
}`;

