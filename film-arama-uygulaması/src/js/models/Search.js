// url = https://api.themoviedb.org/3/movie/550?api_key=bc1e692a4e6ac8971a8bb518d05236c2
// api_key = bc1e692a4e6ac8971a8bb518d05236c2
import { api_key, base_url } from "../config";

export default class Search {
    constructor(keyword){
        this.keyword = keyword;
    }

    async getResults(){
    
        const response = await fetch(`${base_url}/search/movie?api_key=${api_key}&page=1&query=${this.keyword}`);
        this.data = await response.json();
    }
    
}