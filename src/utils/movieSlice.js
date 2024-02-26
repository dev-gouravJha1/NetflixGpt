import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        NOwPlayingMovies: null,
        popularMovies: null,
        trailer: null,
    },
    reducers: {
        addNOwPlayingMovies: (state, action) => {
            state.NOwPlayingMovies = action.payload
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload
        },
        addTrailer: (state, action) => {
            state.trailer = action.payload
        }
    }
})

export const { addNOwPlayingMovies, addTrailer, addPopularMovies } = movieSlice.actions
export default movieSlice.reducer