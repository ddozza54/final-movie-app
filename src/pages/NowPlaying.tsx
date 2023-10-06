import { useQuery } from '@tanstack/react-query';
import { getNowPlaying } from '../api';
import Movies from '../components/Moives/Movies';

export default function NowPlaying() {
    const { isLoading, data } = useQuery({
        queryKey: ['now-playing'],
        queryFn: getNowPlaying
    });
    return (
        <div>
            {isLoading ? <span>Loading...</span>
                : <Movies data={data} />
            }
        </div>
    );
}

