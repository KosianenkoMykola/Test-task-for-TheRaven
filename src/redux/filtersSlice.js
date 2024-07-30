import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'filters',
    initialState: {
        name: "",
    },
    reducers: {
        changeFilter: (state, actions) => {
            state.name = actions.payload;
        }
    }
})

export const selectNameFilter = state => state.filters.name;

export const { changeFilter } = slice.actions;

export default slice.reducer;