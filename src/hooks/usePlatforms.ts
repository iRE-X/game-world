import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import apiClient, { FetchResponse } from "../services/api-client";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

// const usePlatforms = () => ({ data: platforms, isLoading: false, error: null });

const usePlatforms = () => {
    return useQuery<Platform[], Error>({
        queryKey: ["platforms"],
        queryFn: () =>
            apiClient
                .get<FetchResponse<Platform>>("/platforms/lists/parents")
                .then(res => res.data.results),
        staleTime: 24 * 60 * 60 * 1000, // 24hours
        initialData: platforms,
    });
};

export default usePlatforms;

// useData<Platform>("/platforms/lists/parents")
