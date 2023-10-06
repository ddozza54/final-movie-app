import { useQuery } from "@tanstack/react-query";
import { getComingSoon } from "../api";
import Movies from "../components/Moives/Movies";

export default function ComingSoon() {
    const { isLoading, data } = useQuery({
        queryKey: ['coming-soon'],
        queryFn: getComingSoon
    });
    return (
        <div>
            {isLoading ? <span>Loading...</span>
                : <Movies data={data} />
            }
        </div>
    );
}
