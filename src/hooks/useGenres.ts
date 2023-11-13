import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import genres from "../data/genres";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const apiClient = new APIClient<Genre>("/genres");

// const useGenres = () => ({ data: genres, isLoading: false, error: null });

const useGenres = () => {
    return useQuery<Genre[], Error>({
        queryKey: ["genres"],
        queryFn: apiClient.getAll,
        initialData: genres.results,
    });
};

export default useGenres;
