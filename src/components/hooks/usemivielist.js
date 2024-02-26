import { useDispatch } from "react-redux";
import { addNOwPlayingMovies, addPopularMovies } from "../../utils/movieSlice";
import { useEffect } from "react";
import { options } from "../../utils/constant";


const useNowPlayingMovies = (category) => {
    console.log("NowPlayingMovies", category)
    const Dispatch = useDispatch();
    useEffect(() => { getNOwPlayingMovies() }, [])
    const getNOwPlayingMovies = async () => {
        const list = await fetch(`https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`, options);
        const response = await list.json();
        console.log(list)
        if (category == "now_playing") {
            Dispatch(addNOwPlayingMovies(response.results))
        }
        else if (category == "popular") {
            Dispatch(addPopularMovies(response.results))
        }

    }
}
export default useNowPlayingMovies;