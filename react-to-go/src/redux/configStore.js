import { configureStore } from '@reduxjs/toolkit'
import pokemonSlice from "./slices/pokemonSlice.js";
import phoneSlice from "./slices/phoneSlice.js";
import userSlice from "./slices/userSlice.js";

export const store = configureStore({
    reducer: {
        pokemonSlice,
        phoneSlice,
        userSlice,
    },
})