import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'bdfb8d9ac33f442c9e4a9038ba2e6e28'
    }
});