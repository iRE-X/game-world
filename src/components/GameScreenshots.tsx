import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
    gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
    const { data, error } = useScreenshots(gameId);

    if (error) throw error;

    if (!data || !data.length) return null;

    return (
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
            {data.map(ss => (
                <Image key={ss.id} src={ss.image} alt="Game Screenshot" />
            ))}
        </SimpleGrid>
    );
};

export default GameScreenshots;
