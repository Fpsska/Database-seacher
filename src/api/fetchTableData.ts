import { createAsyncThunk } from '@reduxjs/toolkit';

// /. imports

export const fetchTableData = createAsyncThunk(
    'tableSlice/fetchTableData',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch('https://welbex-task-backend.vercel.app/api/data');

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