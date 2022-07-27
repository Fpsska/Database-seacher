import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface navSliceTypes {
    currentPage: number,
    itemsPerPage: number
}

const initialState: navSliceTypes = {
    currentPage: 1,
    itemsPerPage: 11
};

const navSlice = createSlice({
    name: 'navSlice',
    initialState,
    reducers: {
        setCurrentPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload;
        }
    }
});

export const {
    setCurrentPage
} = navSlice.actions;

export default navSlice.reducer;