import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// /. imports

interface navSliceTypes {
    currentPage: number;
    itemsPerPage: number;
}

// /. interfaces

const initialState: navSliceTypes = {
    currentPage: 1,
    itemsPerPage: 30 // change the value for set count of visible items on page
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

export const { setCurrentPage } = navSlice.actions;

export default navSlice.reducer;
