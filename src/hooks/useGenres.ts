import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import genres from "../data/genres";
import Genre from "../entities/Genre";

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () => {
    return useQuery<Genre[], Error>({
        queryKey: ["genres"],
        queryFn: apiClient.getAll,
        initialData: genres.results,
    });
};

export default useGenres;
