import { useQuery } from "@tanstack/react-query";
import { getComingSoon } from "../api";
import Movies from "../components/Moives/Movies";

export default function ComingSoon() {
    const { isLoading, data } = useQuery({
        queryKey: ['movies', 'coming-soon'],
        queryFn: getComingSoon
    });
    return (
        <div>
            {isLoading ? <span>Loading...</span>
                : <Movies data={data.results} />
            }
        </div>
    );
}
