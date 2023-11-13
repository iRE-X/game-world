import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClient from "../services/api-client";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const apiClient = new APIClient<Platform>("platforms/lists/parents");

const usePlatforms = () => {
    return useQuery<Platform[], Error>({
        queryKey: ["platforms"],
        queryFn: apiClient.getAll,
        initialData: platforms.results,
    });
};

export default usePlatforms;
