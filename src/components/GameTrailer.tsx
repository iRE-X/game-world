import useTrailers from "../hooks/useTrailers";

interface Props {
    id: number;
}

const GameTrailer = ({ id }: Props) => {
    const { data } = useTrailers(id);

    if (!data || !data.length) return null;

    const trailer = data[0];

    return <video src={trailer.data[480]} poster={trailer.preview} controls />;
};

export default GameTrailer;
