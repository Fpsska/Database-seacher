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
            name: 'AAA',
            count: 500,
            distance: 100
        },
        {
            id: 2,
            date: '13.11.13',
            name: 'BBB',
            count: 490,
            distance: 200
        },
        {
            id: 3,
            date: '12.12.12',
            name: 'CCC',
            count: 480,
            distance: 300
        },
        {
            id: 4,
            date: '13.11.13',
            name: 'DDD',
            count: 470,
            distance: 400
        },
        {
            id: 5,
            date: '12.12.12',
            name: 'EEE',
            count: 460,
            distance: 500
        },
        {
            id: 6,
            date: '13.11.13',
            name: 'FFF',
            count: 450,
            distance: 600
        },
        {
            id: 7,
            date: '12.12.12',
            name: 'GGG',
            count: 440,
            distance: 700
        },
        {
            id: 8,
            date: '13.11.13',
            name: 'HHH',
            count: 430,
            distance: 800
        },
        {
            id: 9,
            date: '12.12.12',
            name: 'III',
            count: 420,
            distance: 900
        },
        {
            id: 10,
            date: '13.11.13',
            name: 'JJJ',
            count: 410,
            distance: 1000
        }
    ],
    tableHeadData: [
        {
            id: 'date',
            text: 'Date',
            isActive: false
        },
        {
            id: 'name',
            text: 'Name',
            isActive: false
        },
        {
            id: 'count',
            text: 'Count (pc)',
            isActive: false
        },
        {
            id: 'distance',
            text: 'Distance (m)',
            isActive: false
        }
    ],
    filterConditionOpt: 'less',
    filterColumnOpt: 'name'
};

const tableSlice = createSlice({
    name: 'tableSlice',
    initialState,
    reducers: {
        setFilterConditionOpt(state, action: PayloadAction<string>) {
            state.filterConditionOpt = action.payload;
        },
        setFilterColumnOpt(state, action: PayloadAction<string>) {
            state.filterColumnOpt = action.payload;
        },
        switchTHActiveStatus(state, action: PayloadAction<{ id: string, status: boolean }>) {
            const { id, status } = action.payload;
            state.tableHeadData.forEach(item => item.id === id ? item.isActive = status : item.isActive = false);
        },
        sortDataBy(state, action: PayloadAction<any>) {
            const { filterColumnOpt, filterConditionOpt } = action.payload;

            switch (filterColumnOpt && filterConditionOpt) {
                case 'name': case 'more':
                    state.tableData = state.tableData.sort((a, b) => a.name > b.name ? 1 : -1);
                    break;
                case 'name': case 'less':
                    state.tableData = state.tableData.sort((a, b) => a.name < b.name ? 1 : -1);
                    break;
            }
        }
    }
});

export const {
    setFilterConditionOpt,
    setFilterColumnOpt,
    switchTHActiveStatus,
    sortDataBy
} = tableSlice.actions;

export default tableSlice.reducer;