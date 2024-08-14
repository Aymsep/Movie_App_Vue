import axios from "axios";


const api = axios.create({
    baseURL:"https://www.omdbapi.com/"
})


export function getMovies(type="action"){
    return api.get(`?apikey=f036d6a4&s=${type}`)
}

export default api