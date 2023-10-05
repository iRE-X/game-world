import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "c4eafd3e2aec4e47b65a4a849f5a3793",
    },
});
