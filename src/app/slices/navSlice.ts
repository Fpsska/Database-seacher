import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { InavTemplates } from '../../Types/navSliceTypes';

interface navSliceTypes {
    navTemplatesData: InavTemplates[],
    currentPage: number,
    itemsPerPage: number
}

const initialState: navSliceTypes = {
    navTemplatesData: [
        {
            id: 1,
            text: '1',
            isActive: true
        },
        {
            id: 2,
            text: '2',
            isActive: false
        },
        {
            id: 3,
            text: '3',
            isActive: false
        },
        {
            id: 4,
            text: '4',
            isActive: false
        },
        {
            id: 5,
            text: '5',
            isActive: false
        }
    ],
    currentPage: 1,
    itemsPerPage: 4
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