import useTrailers from "../hooks/useTrailers";

interface Props {
    gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
    const { data } = useTrailers(gameId);

    if (!data || !data.length) return null;

    const trailer = data[0];

    return <video src={trailer.data[480]} poster={trailer.preview} controls />;
};

export default GameTrailer;
