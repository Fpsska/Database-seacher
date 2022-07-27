import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ItableData, ItableHead } from '../../Types/tableSliceTypes';

import { getDublocateItems } from '../../helpers/getDublicateItems';

interface tableSliceTypes {
    tableData: ItableData[],
    filteredTableData: ItableData[],
    tableHeadData: ItableHead[],
    filterConditionOpt: string,
    filterColumnOpt: string,
    isDataLoading: boolean
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
            count: 420,
            distance: 100
        },
        {
            id: 4,
            date: '13.11.13',
            name: 'CCC',
            count: 440,
            distance: 800
        },
        {
            id: 5,
            date: '12.12.12',
            name: 'EEE',
            count: 410,
            distance: 800
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
        },
        {
            id: 11,
            date: '13.11.13',
            name: '',
            count: 470,
            distance: 600
        }
    ],
    filteredTableData: [
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
            count: 420,
            distance: 100
        },
        {
            id: 4,
            date: '13.11.13',
            name: 'CCC',
            count: 440,
            distance: 800
        },
        {
            id: 5,
            date: '12.12.12',
            name: 'EEE',
            count: 410,
            distance: 800
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
        },
        {
            id: 11,
            date: '13.11.13',
            name: '',
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
    filterColumnOpt: 'name',
    isDataLoading: true
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
                    if (filterConditionOpt === 'more') { // MORE (ASC) 1..10 
                        state.tableData = state.filteredTableData.sort((a, b) => a.name > b.name ? 1 : -1);
                    }
                    if (filterConditionOpt === 'less') { // LESS (DSC) 10..1
                        state.tableData = state.filteredTableData.sort((a, b) => a.name < b.name ? 1 : -1);
                    }
                    if (filterConditionOpt === 'contain') { // show el, whose name field not empty
                        state.tableData = state.filteredTableData.filter(item => item.name);
                    }
                    if (filterConditionOpt === 'equal') {
                        state.tableData = getDublocateItems(state.filteredTableData, 'name');
                    }
                    break;

                case 'count':
                    if (filterConditionOpt === 'more') {
                        state.tableData = state.filteredTableData.sort((a, b) => a.count - b.count);
                    }
                    if (filterConditionOpt === 'less') {
                        state.tableData = state.filteredTableData.sort((a, b) => b.count - a.count);
                    }
                    if (filterConditionOpt === 'contain') {
                        state.tableData = state.filteredTableData.filter(item => item.count);
                    }
                    if (filterConditionOpt === 'equal') {
                        state.tableData = getDublocateItems(state.filteredTableData, 'count');
                    }
                    break;

                case 'distance':
                    if (filterConditionOpt === 'more') {
                        state.tableData = state.filteredTableData.sort((a, b) => a.distance - b.distance);
                    }
                    if (filterConditionOpt === 'less') {
                        state.tableData = state.filteredTableData.sort((a, b) => b.distance - a.distance);
                    }
                    if (filterConditionOpt === 'contain') {
                        state.tableData = state.filteredTableData.filter(item => item.distance);
                    }
                    if (filterConditionOpt === 'equal') {
                        state.tableData = getDublocateItems(state.filteredTableData, 'distance');
                    }
                    break;
            }
        },
        filterData(state, action: PayloadAction<{ name: string, value: string }>) {
            const { name, value } = action.payload;

            switch (name) {
                case 'name':
                    state.tableData = state.filteredTableData.filter(item => RegExp(value, 'gi').test(item.name));
                    break;
                case 'count':
                    state.tableData = state.filteredTableData.filter(item => RegExp(value, 'g').test(String(item.count)));
                    break;
                case 'distance':
                    state.tableData = state.filteredTableData.filter(item => RegExp(value, 'g').test(String(item.distance)));
                    break;
            }
        },
        switchLoadingStatus(state, action: PayloadAction<boolean>) {
            state.isDataLoading = action.payload;
        }
    }
});

export const {
    setFilterConditionOpt,
    setFilterColumnOpt,
    switchTHActiveStatus,
    sortData,
    filterData,
    switchLoadingStatus
} = tableSlice.actions;

export default tableSlice.reducer;