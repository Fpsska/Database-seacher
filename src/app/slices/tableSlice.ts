import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import { ItableData, ItableHead } from '../../Types/tableSliceTypes';

import { getDublocateItems } from '../../helpers/getDublicateItems';

export const fetchTableData = createAsyncThunk(
    'tableSlice/fetchTableData',
    async () => {
        const response = await fetch('http://localhost:8080/api/data');
        const data = await response.json();
        return data;
    }
);

interface tableSliceTypes {
    tableData: ItableData[],
    filteredTableData: ItableData[],
    tableHeadData: ItableHead[],
    filterConditionOpt: string,
    filterColumnOpt: string,
    isDataLoading: boolean,
    status: string
}

const initialState: tableSliceTypes = {
    tableData: [],
    filteredTableData: [],
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
    isDataLoading: true,
    status: ''
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
    },
    extraReducers: {
        [fetchTableData.pending.type]: (state) => {
            state.status = 'loading';
        },
        [fetchTableData.fulfilled.type]: (state, action: PayloadAction<ItableData[]>
        ) => {
            state.tableData = action.payload;
            state.filteredTableData = action.payload;
            state.status = 'success';
        },
        [fetchTableData.rejected.type]: (state) => {
            state.status = 'failed';
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