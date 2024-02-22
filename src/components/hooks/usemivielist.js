import { useDispatch } from "react-redux";
import { addNOwPlayingMovies } from "../../utils/movieSlice";
import { useEffect } from "react";
import { options } from "../../utils/constant";

const useNowPlayingMovies = () => {
    const Dispatch = useDispatch();
    useEffect(() => { getNOwPlayingMovies() }, [])
    const getNOwPlayingMovies = async () => {
        const list = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);
        const response = await list.json();
        console.log(response)
        Dispatch(addNOwPlayingMovies(response.results))
    }
}
export default useNowPlayingMovies;