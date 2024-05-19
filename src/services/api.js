import axios from 'axios';


//base da URL:https://api.themoviedb.org/3/
//https://api.themoviedb.org/3/movie/now_playing?api_key=2417dfd0bef5d94ee42ed68934cd7d91&language=pt-BR

const api = axios.create({
    baseURL : 'https://api.themoviedb.org/3/'
});

export default api