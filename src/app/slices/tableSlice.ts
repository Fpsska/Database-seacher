import { createSlice } from '@reduxjs/toolkit';

import { ItableData } from '../../Types/tableSliceTypes';

interface tableSliceTypes {
    tableData: ItableData[]
}

const initialState: tableSliceTypes = {
    tableData: [
        {
            id: 1,
            date: '12.12.12',
            name: 'item #1',
            count: 420,
            distance: 100
        },
        {
            id: 2,
            name: 'item #2',
            date: '13.11.13',
            count: 450,
            distance: 200
        },
        {
            id: 3,
            date: '12.12.12',
            name: 'item #1',
            count: 420,
            distance: 100
        },
        {
            id: 4,
            name: 'item #2',
            date: '13.11.13',
            count: 450,
            distance: 200
        },
        {
            id: 5,
            date: '12.12.12',
            name: 'item #1',
            count: 420,
            distance: 100
        },
        {
            id: 6,
            name: 'item #2',
            date: '13.11.13',
            count: 450,
            distance: 200
        },
        {
            id: 7,
            date: '12.12.12',
            name: 'item #1',
            count: 420,
            distance: 100
        },
        {
            id: 8,
            name: 'item #2',
            date: '13.11.13',
            count: 450,
            distance: 200
        },
        {
            id: 9,
            date: '12.12.12',
            name: 'item #1',
            count: 420,
            distance: 100
        },
        {
            id: 10,
            name: 'item #2',
            date: '13.11.13',
            count: 450,
            distance: 200
        }
    ]
};

const tableSlice = createSlice({
    name: 'tableSlice',
    initialState,
    reducers: {}
});

export const { } = tableSlice.actions;

export default tableSlice.reducer;