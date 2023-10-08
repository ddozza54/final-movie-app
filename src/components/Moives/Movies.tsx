import styled from "styled-components";
import MovieProfile from "./MovieProfile";
import { IMovie } from "../../api";
import { motion } from "framer-motion";

export default function Movies({ data }) {
    return (
        <MoviesGrid
            className="container"
            variants={container}
            initial="hidden"
            animate="visible"
        >
            {data.map((movie: IMovie, i: number) =>
                <motion.div
                    key={i}
                    variants={item}>
                    <MovieProfile
                        key={movie.id}
                        id={movie.id}
                        poster_path={movie.poster_path}
                        title={movie.title} />
                </motion.div>
            )}
        </MoviesGrid>
    );
}


const MoviesGrid = styled(motion.section)`
width: 100%;
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: auto;
grid-gap: 1rem;
`
const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.15
        }
    }
}

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
}