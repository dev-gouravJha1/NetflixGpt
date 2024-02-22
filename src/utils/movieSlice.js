import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        NOwPlayingMovies: null
    },
    reducers: {
        addNOwPlayingMovies: (state, action) => {
            state.NOwPlayingMovies = action.payload
        }
    }
})

export const { addNOwPlayingMovies } = movieSlice.actions
export default movieSlice.reducer