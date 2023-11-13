import usePlatforms from "./usePlatforms";

const usePlatform = (id?: number) => {
    return usePlatforms().data.find(platform => platform.id === id);
};

export default usePlatform;
