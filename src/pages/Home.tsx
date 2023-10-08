import { useQuery } from '@tanstack/react-query';
import { getPopular } from '../api';
import Movies from '../components/Moives/Movies';

export default function Home() {
    const { isLoading, data } = useQuery({
        queryKey: ['movies', 'popular'],
        queryFn: getPopular
    });
    return (
        <div>
            {isLoading ? <span>Loading...</span>
                : <Movies data={data.results} />
            }
        </div>
    );
}
