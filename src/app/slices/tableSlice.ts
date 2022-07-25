import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ItableData, ItableHead } from '../../Types/tableSliceTypes';

interface tableSliceTypes {
    tableData: ItableData[],
    tableHeadData: ItableHead[],
    filterConditionOpt: string,
    filterColumnOpt: string
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
    ],
    tableHeadData: [
        {
            id: 1,
            text: 'Date',
            isActive: false
        },
        {
            id: 2,
            text: 'Name',
            isActive: false
        },
        {
            id: 3,
            text: 'Count (pc)',
            isActive: false
        },
        {
            id: 4,
            text: 'Distance (m)',
            isActive: false
        }
    ],
    filterConditionOpt: 'contain',
    filterColumnOpt: 'name'
};

const tableSlice = createSlice({
    name: 'tableSlice',
    initialState,
    reducers: {
        setFilterConditionOpt(state, actions: PayloadAction<string>) {
            state.filterConditionOpt = actions.payload;
        },
        setFilterColumnOpt(state, actions: PayloadAction<string>) {
            state.filterColumnOpt = actions.payload;
        },
        switchTHActiveStatus(state, action: PayloadAction<{ id: number, status: boolean }>) {
            const { id, status } = action.payload;
            state.tableHeadData.forEach(item => item.id === id ? item.isActive = status : item.isActive = false);
        }
    }
});

export const {
    setFilterConditionOpt,
    setFilterColumnOpt,
    switchTHActiveStatus
} = tableSlice.actions;

export default tableSlice.reducer;