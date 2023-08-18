import axios from "axios";

export async function getSongs(termName){
    const URL= `https://itunes.apple.com/search?term=${termName}&limit=25&country=in`;
    const response= await axios.get(URL);
    return response.data['results'];
}