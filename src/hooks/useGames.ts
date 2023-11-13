import { GameQuery } from "../App";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Platform } from "./usePlatforms";
import APIClient from "../services/api-client";

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    rating_top: number;
}

const apiClient = new APIClient<Game>("/games");

const useGames = (gameQuery: GameQuery) => {
    return useInfiniteQuery<Game[], Error>({
        queryKey: ["games", gameQuery],
        queryFn: ({ pageParam }) =>
            apiClient.getAll({
                params: {
                    genres: gameQuery.genreId,
                    parent_platforms: gameQuery.platformId,
                    ordering: gameQuery.sortOrder,
                    search: gameQuery.searchText,
                    page: pageParam,
                },
            }),
        initialPageParam: 1,
        staleTime: 24 * 60 * 60 * 1000, // 1hour
        getNextPageParam: (lastpage, allpages) => {
            return lastpage.length ? allpages.length + 1 : undefined;
        },
    });
};

// const useGames = (gameQuery: GameQuery) =>
//     useData<Game>(
//         "/games",
//         {
//             params: {
//                 genres: gameQuery.genre?.id,
//                 parent_platforms: gameQuery.platform?.id,
//                 ordering: gameQuery.sortOrder,
//                 search: gameQuery.searchText,
//             },
//         },
//         [gameQuery]
//     );

export default useGames;
