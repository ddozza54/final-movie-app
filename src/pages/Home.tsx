import { useQuery } from '@tanstack/react-query';
import { IMovie, getPopular } from '../api';
import MovieProfile from '../components/MovieProfile';
import styled from 'styled-components';

export default function Home() {
    const { isLoading, data } = useQuery({
        queryKey: ['popularMovies'],
        queryFn: getPopular
    });
    return (
        <div>
            {isLoading ? <span>Loading...</span>
                : <MoviesGrid>
                    {data.results.map((movie: IMovie) =>
                        <MovieProfile
                            key={movie.id}
                            poster_path={movie.poster_path}
                            title={movie.title} />
                    )}
                </MoviesGrid>
            }
        </div>
    );
}

const MoviesGrid = styled.section`
width: 100%;
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: auto;
grid-gap: 1rem;
` 
