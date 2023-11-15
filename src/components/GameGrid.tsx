import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
    const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames();

    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    if (error) return <Text>{error.message}</Text>;

    const totalGames =
        data?.pages.reduce((total, page) => total + page.length, 0) || 0;

    return (
        <InfiniteScroll
            dataLength={totalGames}
            next={fetchNextPage}
            hasMore={hasNextPage}
            loader={<Spinner />}
        >
            <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
                spacing={5}
                padding="10px"
            >
                {isLoading &&
                    skeletons.map(s => (
                        <GameCardContainer key={s}>
                            <GameCardSkeleton />
                        </GameCardContainer>
                    ))}
                {data?.pages.map((page, index) => (
                    <React.Fragment key={index}>
                        {page?.map(game => (
                            <GameCardContainer key={game.id}>
                                <GameCard game={game} />
                            </GameCardContainer>
                        ))}
                    </React.Fragment>
                ))}
            </SimpleGrid>
            {/* {hasNextPage && (
                    <Button onClick={() => fetchNextPage()} marginY={5}>
                        {isFetchingNextPage ? "Loading..." : "Load More"}
                    </Button>
                )} */}
        </InfiniteScroll>
    );
};

export default GameGrid;
