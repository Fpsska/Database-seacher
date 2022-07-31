import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import { ItableData, ItableHead } from '../../Types/tableSliceTypes';

import { getDublocateItems } from '../../helpers/getDublicateItems';

export const fetchTableData = createAsyncThunk(
    'tableSlice/fetchTableData',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch('https://vercel-backend-test-jq1q7qnim-fpsska.vercel.app/api/data');

            if (!response.ok) {
                throw new Error('Error from response');
            }

            const data = await response.json();
            return data;
        } catch (err: any) {
            return rejectWithValue(err.message); // send to case rejected.type of extreReducers 
        }
    }
);

interface tableSliceTypes {
    tableData: ItableData[],
    filteredTableData: ItableData[],
    tableHeadData: ItableHead[],
    filterConditionOpt: string,
    filterColumnOpt: string,
    isDataLoading: boolean,
    status: string,
    error: string
}

const initialState: tableSliceTypes = {
    tableData: [
        // {
        //     id: 1,
        //     date: '12.12.12',
        //     name: 'test',
        //     count: 100,
        //     distance: 1000
        // },
        // {
        //     id: 3,
        //     date: '11.11.11',
        //     name: '',
        //     count: 2400,
        //     distance: 6546
        //     },
        // {
        //     id: 7,
        //     date: '11.11.04',
        //     name: 'qdftaswq',
        //     count: 200,
        //     distance: 4000
        //     },
        // {
        //     id: 8,
        //     date: '12.12.02',
        //     name: 'tewwrwedft',
        //     count: 300,
        //     distance: 5000
        //     },
        // {
        //     id: 9,
        //     date: '12.10.01',
        //     name: 'tdsfsdfsdf',
        //     count: 400,
        //     distance: 2340
        //     },
        // {
        //     id: 10,
        //     date: '12.09.12',
        //     name: 'nghnghnt',
        //     count: 500,
        //     distance: 3200
        //     },
        // {
        //     id: 11,
        //     date: '12.08.12',
        //     name: 'tnhghgn',
        //     count: 600,
        //     distance: 1200
        //     },
        // {
        //     id: 12,
        //     date: '11.05.12',
        //     name: 'tyuiyui',
        //     count: 700,
        //     distance: 12301
        //     },
        // {
        //     id: 13,
        //     date: '17.12.12',
        //     name: 'oiuouotest',
        //     count: 800,
        //     distance: 10123
        //     },
        // {
        //     id: 14,
        //     date: '24.05.12',
        //     name: 'aasdfgt',
        //     count: 900,
        //     distance: 23423
        //     },
        // {
        //     id: 15,
        //     date: '16.02.12',
        //     name: 'zdzdzdtest',
        //     count: 1000,
        //     distance: 12340
        //     },
        // {
        //     id: 16,
        //     date: '22.11.12',
        //     name: 'wwwfgfg',
        //     count: 1100,
        //     distance: 32423
        // },
        // {
        //     id: 17,
        //     date: '17.12.12',
        //     name: 'wqqqtest',
        //     count: 1200,
        //     distance: 154
        // },
        // {
        //     id: 18,
        //     date: '11.01.12',
        //     name: 'xcxtest',
        //     count: 1300,
        //     distance: 1230
        // },
        // {
        //     id: 19,
        //     date: '22.09.12',
        //     name: 'bvvbbtest',
        //     count: 1400,
        //     distance: 6312
        // },
        // {
        //     id: 20,
        //     date: '12.07.12',
        //     name: 'tytyrtyest',
        //     count: 1500,
        //     distance: 10
        // },
        // {
        //     id: 25,
        //     date: '12.07.12',
        //     name: 'tytyrtyest',
        //     count: 1500,
        //     distance: 10
        // },
        // {
        //     id: 27,
        //     date: '12.12.12',
        //     name: 'lliutest',
        //     count: 1600,
        //     distance: 1313
        // },
        // {
        //     id: 28,
        //     date: '01.11.12',
        //     name: 'lfghtest',
        //     count: 234,
        //     distance: 3211
        // },
        // {
        //     id: 29,
        //     date: '05.04.12',
        //     name: 'ghhgfhtest',
        //     count: 1800,
        //     distance: 5444
        // },
        // {
        //     id: 30,
        //     date: '08.05.12',
        //     name: 'rtyrtytest',
        //     count: 2000,
        //     distance: 1867
        // },
        // {
        //     id: 31,
        //     date: '19.05.12',
        //     name: 'dfgdfgtest',
        //     count: 2100,
        //     distance: 8956
        // },
        // {
        //     id: 32,
        //     date: '12.11.12',
        //     name: 'tefghfdgt',
        //     count: 2200,
        //     distance: 9766
        // },
        // {
        //     id: 33,
        // date: '17.11.12',
        //     name: 'ttrytryest',
        //     count: 2300,
        //     distance: 7853
        //     },
        // {
        //     id: 34,
        //     date: '02.11.12',
        //     name: '',
        //     count: 2400,
        //     distance: 6546
        //     },
        // {
        //     id: 35,
        //     date: '12.12.12',
        //     name: 'asdasdtest',
        //     count: 2500,
        //     distance: 2345
        //     },
        // {
        //     id: 36,
        //     date: '11.01.12',
        //     name: 'bbbbtest',
        //     count: 2600,
        //     distance: 9878
        //     },
        // {
        //     id: 37,
        //     date: '17.02.12',
        //     name: 'aaatest',
        //     count: 2700,
        //     distance: 1222
        //     },
        // {
        //     id: 38,
        //     date: '22.09.12',
        //     name: 'sqqqtest',
        //     count: 2700,
        //     distance: 2222
        //     },
        // {
        //     id: 39,
        //     date: '30.06.12',
        //     name: '',
        //     count: 2800,
        //     distance: 4444
        //     },
        // {
        //     id: 40,
        //     date: '21.12.12',
        //     name: 'test123',
        //     count: 2222,
        //     distance: 5555
        //     },
        // {
        //     id: 41,
        //     date: '22.01.04',
        //     name: 'testqwe',
        //     count: 2222,
        //     distance: 5555
        //     },
        // {
        //     id: 42,
        //     date: '12.05.02',
        //     name: 'tsadstqwe',
        //     count: 222,
        //     distance: 4355
        //     },
        // {
        //     id: 43,
        //     date: '12.04.05',
        //     name: 'fgdfgwe',
        //     count: 2212,
        //     distance: 355
        //     },
        // {
        //     id: 44,
        //     date: '2.01.01',
        //     name: 'yutdvbwe',
        //     count: 5412,
        //     distance: 3325
        //     },
        // {
        //     id: 45,
        //     date: '11.01.01',
        //     name: 'drtfdse',
        //     count: 542,
        //     distance: 3225
        //     }
    ],
    filteredTableData: [
        // {
        //     id: 1,
        //     date: '12.12.12',
        //     name: 'test',
        //     count: 100,
        //     distance: 1000
        // },
        // {
        //     id: 3,
        //     date: '11.11.11',
        //     name: '',
        //     count: 2400,
        //     distance: 6546
        //     },
        // {
        //     id: 7,
        //     date: '11.11.04',
        //     name: 'qdftaswq',
        //     count: 200,
        //     distance: 4000
        //     },
        // {
        //     id: 8,
        //     date: '12.12.02',
        //     name: 'tewwrwedft',
        //     count: 300,
        //     distance: 5000
        //     },
        // {
        //     id: 9,
        //     date: '12.10.01',
        //     name: 'tdsfsdfsdf',
        //     count: 400,
        //     distance: 2340
        //     },
        // {
        //     id: 10,
        //     date: '12.09.12',
        //     name: 'nghnghnt',
        //     count: 500,
        //     distance: 3200
        //     },
        // {
        //     id: 11,
        //     date: '12.08.12',
        //     name: 'tnhghgn',
        //     count: 600,
        //     distance: 1200
        //     },
        // {
        //     id: 12,
        //     date: '11.05.12',
        //     name: 'tyuiyui',
        //     count: 700,
        //     distance: 12301
        //     },
        // {
        //     id: 13,
        //     date: '17.12.12',
        //     name: 'oiuouotest',
        //     count: 800,
        //     distance: 10123
        //     },
        // {
        //     id: 14,
        //     date: '24.05.12',
        //     name: 'aasdfgt',
        //     count: 900,
        //     distance: 23423
        //     },
        // {
        //     id: 15,
        //     date: '16.02.12',
        //     name: 'zdzdzdtest',
        //     count: 1000,
        //     distance: 12340
        //     },
        // {
        //     id: 16,
        //     date: '22.11.12',
        //     name: 'wwwfgfg',
        //     count: 1100,
        //     distance: 32423
        // },
        // {
        //     id: 17,
        //     date: '17.12.12',
        //     name: 'wqqqtest',
        //     count: 1200,
        //     distance: 154
        // },
        // {
        //     id: 18,
        //     date: '11.01.12',
        //     name: 'xcxtest',
        //     count: 1300,
        //     distance: 1230
        // },
        // {
        //     id: 19,
        //     date: '22.09.12',
        //     name: 'bvvbbtest',
        //     count: 1400,
        //     distance: 6312
        // },
        // {
        //     id: 20,
        //     date: '12.07.12',
        //     name: 'tytyrtyest',
        //     count: 1500,
        //     distance: 10
        // },
        // {
        //     id: 25,
        //     date: '12.07.12',
        //     name: 'tytyrtyest',
        //     count: 1500,
        //     distance: 10
        // },
        // {
        //     id: 27,
        //     date: '12.12.12',
        //     name: 'lliutest',
        //     count: 1600,
        //     distance: 1313
        // },
        // {
        //     id: 28,
        //     date: '01.11.12',
        //     name: 'lfghtest',
        //     count: 234,
        //     distance: 3211
        // },
        // {
        //     id: 29,
        //     date: '05.04.12',
        //     name: 'ghhgfhtest',
        //     count: 1800,
        //     distance: 5444
        // },
        // {
        //     id: 30,
        //     date: '08.05.12',
        //     name: 'rtyrtytest',
        //     count: 2000,
        //     distance: 1867
        // },
        // {
        //     id: 31,
        //     date: '19.05.12',
        //     name: 'dfgdfgtest',
        //     count: 2100,
        //     distance: 8956
        // },
        // {
        //     id: 32,
        //     date: '12.11.12',
        //     name: 'tefghfdgt',
        //     count: 2200,
        //     distance: 9766
        // },
        // {
        //     id: 33,
        // date: '17.11.12',
        //     name: 'ttrytryest',
        //     count: 2300,
        //     distance: 7853
        //     },
        // {
        //     id: 34,
        //     date: '02.11.12',
        //     name: '',
        //     count: 2400,
        //     distance: 6546
        //     },
        // {
        //     id: 35,
        //     date: '12.12.12',
        //     name: 'asdasdtest',
        //     count: 2500,
        //     distance: 2345
        //     },
        // {
        //     id: 36,
        //     date: '11.01.12',
        //     name: 'bbbbtest',
        //     count: 2600,
        //     distance: 9878
        //     },
        // {
        //     id: 37,
        //     date: '17.02.12',
        //     name: 'aaatest',
        //     count: 2700,
        //     distance: 1222
        //     },
        // {
        //     id: 38,
        //     date: '22.09.12',
        //     name: 'sqqqtest',
        //     count: 2700,
        //     distance: 2222
        //     },
        // {
        //     id: 39,
        //     date: '30.06.12',
        //     name: '',
        //     count: 2800,
        //     distance: 4444
        //     },
        // {
        //     id: 40,
        //     date: '21.12.12',
        //     name: 'test123',
        //     count: 2222,
        //     distance: 5555
        //     },
        // {
        //     id: 41,
        //     date: '22.01.04',
        //     name: 'testqwe',
        //     count: 2222,
        //     distance: 5555
        //     },
        // {
        //     id: 42,
        //     date: '12.05.02',
        //     name: 'tsadstqwe',
        //     count: 222,
        //     distance: 4355
        //     },
        // {
        //     id: 43,
        //     date: '12.04.05',
        //     name: 'fgdfgwe',
        //     count: 2212,
        //     distance: 355
        //     },
        // {
        //     id: 44,
        //     date: '2.01.01',
        //     name: 'yutdvbwe',
        //     count: 5412,
        //     distance: 3325
        //     },
        // {
        //     id: 45,
        //     date: '11.01.01',
        //     name: 'drtfdse',
        //     count: 542,
        //     distance: 3225
        //     }
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
                    state.tableData = state.filteredTableData.filter(item => RegExp(value.replace(/[^a-zA-Z\s]/g, ''), 'gi').test(item.name));
                    break;
                case 'count':
                    state.tableData = state.filteredTableData.filter(item => RegExp(value.replace(/[^0-9]/g, ''), 'g').test(String(item.count)));
                    break;
                case 'distance':
                    state.tableData = state.filteredTableData.filter(item => RegExp(value.replace(/[^0-9]/g, ''), 'g').test(String(item.distance)));
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
        [fetchTableData.rejected.type]: (state, action: PayloadAction<string>) => {
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