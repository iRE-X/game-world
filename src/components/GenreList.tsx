import {
    Button,
    HStack,
    Heading,
    Image,
    List,
    ListItem,
    Spinner,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";

const GenreList = () => {
    const { data, isLoading, error } = useGenres();

    const genreId = useGameQueryStore(s => s.gameQuery.genreId);
    const setGenreId = useGameQueryStore(s => s.setGenreId);

    if (error)
        return <div className="alert alert-warning">{error.message}</div>;
    if (isLoading) return <Spinner />;

    return (
        <>
            <Heading fontSize={"2xl"} marginBottom={3}>
                Genres
            </Heading>
            <List>
                {data?.map(genre => (
                    <ListItem key={genre.id} paddingY="5px">
                        <HStack>
                            <Image
                                boxSize="32px"
                                borderRadius={8}
                                objectFit="cover"
                                src={getCroppedImageUrl(genre.image_background)}
                            />
                            <Button
                                fontWeight={
                                    genre.id === genreId ? "bold" : "normal"
                                }
                                whiteSpace="normal"
                                textAlign="left"
                                onClick={() => setGenreId(genre.id)}
                                variant="link"
                                fontSize={"lg"}
                            >
                                {genre.name}
                            </Button>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </>
    );
};

export default GenreList;
