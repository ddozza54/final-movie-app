import styled from "styled-components";
import MovieProfile from "./MovieProfile";
import { IMovie } from "../../api";

export default function Movies({ data }) {
    return (
        <MoviesGrid>
            {data.results.map((movie: IMovie) =>
                <MovieProfile
                    key={movie.id}
                    poster_path={movie.poster_path}
                    title={movie.title} />
            )}
        </MoviesGrid>
    );
}


const MoviesGrid = styled.section`
width: 100%;
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: auto;
grid-gap: 1rem;
` 
