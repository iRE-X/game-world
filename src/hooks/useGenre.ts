import useGenres from "./useGenres";

const useGenre = (id?: number) => {
    return useGenres().data.find(genre => genre.id === id);
};

export default useGenre;
