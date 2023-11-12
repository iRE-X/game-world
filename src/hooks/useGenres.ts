import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../services/api-client";
import genres from "../data/genres";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

// const useGenres = () => ({ data: genres, isLoading: false, error: null });

const useGenres = () => {
    return useQuery<Genre[], Error>({
        queryKey: ["genres"],
        queryFn: () =>
            apiClient
                .get<FetchResponse<Genre>>("/genres")
                .then(res => res.data.results),
        staleTime: 24 * 60 * 60 * 1000, // 24hours
        initialData: genres,
    });
};

export default useGenres;
