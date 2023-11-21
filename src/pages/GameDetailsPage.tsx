import { useParams } from "react-router-dom";

const GameDetailsPage = () => {
    const { id } = useParams();
    return <div>GameDetailsPage {id}</div>;
};

export default GameDetailsPage;
