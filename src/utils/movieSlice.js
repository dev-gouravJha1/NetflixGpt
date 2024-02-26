import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        NOwPlayingMovies: null,
        trailer: null,
    },
    reducers: {
        addNOwPlayingMovies: (state, action) => {
            state.NOwPlayingMovies = action.payload
        },
        addTrailer: (state, action) => {
            state.trailer = action.payload
        }
    }
})

export const { addNOwPlayingMovies, addTrailer } = movieSlice.actions
export default movieSlice.reducer