import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import useGameQueryStore from "../store";
import { Game } from "../entities/Game";

const apiClient = new APIClient<Game>("/games");

const useGames = () => {
    const gameQuery = useGameQueryStore(s => s.gameQuery);

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
        getNextPageParam: (lastpage, allpages) => {
            return lastpage.length ? allpages.length + 1 : undefined;
        },
    });
};

export default useGames;
