import { createSlice, PayloadAction, current } from '@reduxjs/toolkit';

import { fetchTableData } from 'api/fetchTableData';

import { getDublicateItems } from 'utils/helpers/getDublicateItems';

import { ItableData, ItableHead } from 'types/tableSliceTypes';

// /. imports

interface tableSliceTypes {
    tableData: ItableData[];
    filteredTableData: ItableData[];
    tableHeadData: ItableHead[];
    filterConditionOpt: string;
    filterColumnOpt: string;
    isDataLoading: boolean;
    status: string;
    error: string;
}

// /. interfaces

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
    status: '',
    error: ''
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
        switchTHActiveStatus(
            state,
            action: PayloadAction<{ id: string; status: boolean }>
        ) {
            const { id, status } = action.payload;
            // /. payload
            state.tableHeadData.map(item =>
                item.id === id
                    ? (item.isActive = status)
                    : (item.isActive = false)
            );
        },
        switchLoadingStatus(state, action: PayloadAction<boolean>) {
            state.isDataLoading = action.payload;
        },
        sortData(
            state,
            action: PayloadAction<{
                filterColumnOpt: string;
                filterConditionOpt: string;
            }>
        ) {
            const { filterColumnOpt, filterConditionOpt } = action.payload;
            // /. payload
            switch (filterColumnOpt) {
                case 'name':
                    // console.log(current(state.tableData));
                    if (filterConditionOpt === 'more') {
                        // MORE (ASC) A-Z
                        state.filteredTableData = [
                            ...state.filteredTableData
                        ].sort((a, b) =>
                            a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
                        );
                    } else if (filterConditionOpt === 'less') {
                        // LESS (DSC) Z-A
                        state.filteredTableData = [
                            ...state.filteredTableData
                        ].sort((a, b) =>
                            a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1
                        );
                    } else if (filterConditionOpt === 'contain') {
                        // show el, whose name field not empty
                        state.filteredTableData = state.tableData.filter(
                            item => item.name
                        );
                    } else if (filterConditionOpt === 'equal') {
                        state.filteredTableData = getDublicateItems(
                            state.tableData,
                            'name'
                        );
                    }
                    break;

                case 'count':
                    if (filterConditionOpt === 'more') {
                        state.filteredTableData = [
                            ...state.filteredTableData
                        ].sort((a, b) => a.count - b.count);
                    } else if (filterConditionOpt === 'less') {
                        state.filteredTableData = [
                            ...state.filteredTableData
                        ].sort((a, b) => b.count - a.count);
                    } else if (filterConditionOpt === 'contain') {
                        state.filteredTableData = state.tableData.filter(
                            item => item.count
                        );
                    } else if (filterConditionOpt === 'equal') {
                        state.filteredTableData = getDublicateItems(
                            state.tableData,
                            'count'
                        );
                    }
                    break;

                case 'distance':
                    if (filterConditionOpt === 'more') {
                        state.filteredTableData = [
                            ...state.filteredTableData
                        ].sort((a, b) => a.distance - b.distance);
                    } else if (filterConditionOpt === 'less') {
                        state.filteredTableData = [
                            ...state.filteredTableData
                        ].sort((a, b) => b.distance - a.distance);
                    } else if (filterConditionOpt === 'contain') {
                        state.filteredTableData = state.tableData.filter(
                            item => item.distance
                        );
                    } else if (filterConditionOpt === 'equal') {
                        state.filteredTableData = getDublicateItems(
                            state.tableData,
                            'distance'
                        );
                    }
                    break;
                default:
                    return;
            }
        },
        filterData(
            state,
            action: PayloadAction<{ name: string; value: string }>
        ) {
            const { name, value } = action.payload;
            // /. payload
            switch (name) {
                case 'name':
                    state.filteredTableData = state.tableData.filter(item =>
                        RegExp(value.replace(/[^a-zA-Z\s]/g, ''), 'gi').test(
                            item.name
                        )
                    );
                    break;
                case 'count':
                    state.filteredTableData = state.tableData.filter(item =>
                        RegExp(value.replace(/[^0-9]/g, ''), 'g').test(
                            String(item.count)
                        )
                    );
                    break;
                case 'distance':
                    state.filteredTableData = state.tableData.filter(item =>
                        RegExp(value.replace(/[^0-9]/g, ''), 'g').test(
                            String(item.distance)
                        )
                    );
                    break;
                default:
                    return;
            }
        }
    },
    extraReducers: {
        [fetchTableData.pending.type]: state => {
            state.status = 'loading';
        },
        [fetchTableData.fulfilled.type]: (
            state,
            action: PayloadAction<ItableData[]>
        ) => {
            state.tableData = action.payload;
            state.filteredTableData = action.payload;
            state.status = 'success';
        },
        [fetchTableData.rejected.type]: (
            state,
            action: PayloadAction<string>
        ) => {
            state.status = 'failed';
            state.error = action.payload;
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
