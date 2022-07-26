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
            distance: 200
        },
        {
            id: 2,
            date: '13.11.13',
            name: 'BBB',
            count: 420,
            distance: 500
        },
        {
            id: 3,
            date: '12.12.12',
            name: 'CCC',
            count: 450,
            distance: 100
        },
        {
            id: 4,
            date: '13.11.13',
            name: 'DDD',
            count: 440,
            distance: 800
        },
        {
            id: 5,
            date: '12.12.12',
            name: 'EEE',
            count: 410,
            distance: 400
        },
        {
            id: 6,
            date: '13.11.13',
            name: 'FFF',
            count: 400,
            distance: 300
        },
        {
            id: 7,
            date: '12.12.12',
            name: 'GGG',
            count: 490,
            distance: 700
        },
        {
            id: 8,
            date: '13.11.13',
            name: 'HHH',
            count: 430,
            distance: 1000
        },
        {
            id: 9,
            date: '12.12.12',
            name: 'III',
            count: 460,
            distance: 900
        },
        {
            id: 10,
            date: '13.11.13',
            name: 'JJJ',
            count: 470,
            distance: 600
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
        sortData(state, action: PayloadAction<{ filterColumnOpt: string, filterConditionOpt: string }>) {
            const { filterColumnOpt, filterConditionOpt } = action.payload;

            switch (filterColumnOpt) {
                case 'name':
                    if (filterConditionOpt === 'more') { // MORE(ASC) 1..10 
                        state.tableData = state.tableData.sort((a, b) => a.name > b.name ? 1 : -1);
                    }
                    if (filterConditionOpt === 'less') { // LESS(DSC) 10..1
                        state.tableData = state.tableData.sort((a, b) => a.name < b.name ? 1 : -1);
                    }
                    break;

                case 'count':
                    if (filterConditionOpt === 'more') {
                        state.tableData = state.tableData.sort((a, b) => a.count - b.count);
                    }
                    if (filterConditionOpt === 'less') {
                        state.tableData = state.tableData.sort((a, b) => b.count - a.count);
                    }
                    break;

                case 'distance':
                    if (filterConditionOpt === 'more') {
                        state.tableData = state.tableData.sort((a, b) => a.distance - b.distance);
                    }
                    if (filterConditionOpt === 'less') {
                        state.tableData = state.tableData.sort((a, b) => b.distance - a.distance);
                    }
                    break;
            }
        }
    }
});

export const {
    setFilterConditionOpt,
    setFilterColumnOpt,
    switchTHActiveStatus,
    sortData
} = tableSlice.actions;

export default tableSlice.reducer;