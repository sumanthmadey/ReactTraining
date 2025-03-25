import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    myName: '',
    accountBalance: 0,
    datarecived: {}
}

// First, create the thunk
export const fetchUserById = createAsyncThunk(
    'action/fetchUserById', () => {
        return fetch('https://jsonplaceholder.typicode.com/todos/1').
            then(response => response.json()).
            then(json => json);
    })

export const bankReducer = createSlice({
    name: 'UTTUTIbank',
    initialState: initialState,
    reducers: {
        addMoney: (state, action) => {


            state.accountBalance = state.accountBalance + action.payload;
        },

        removeMoney: (state, action) => {
            state.accountBalance = state.accountBalance - action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUserById.fulfilled, (state, action) => {
            state.datarecived = action.payload
        })
    }


});

// this is for dispatch
export const { addMoney, removeMoney, makeAPI } = bankReducer.actions;

// this is for configureStore
export default bankReducer.reducer;
