import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Vehicles } from "app/types/models";


interface vehiclesState {
    isLoading: boolean;
    error: string;
    vehicles: Vehicles[];
}

const initialState: vehiclesState = {
    isLoading: false,
    error: '',
    vehicles: []
}

export const vehiclesSlice = createSlice({
    name: 'vehicle',
    initialState,
    reducers: {
       fetching(state) {
        state.isLoading = true;
       }, 
       fetchSuccess(state, action: PayloadAction<Vehicles[]>) {
        state.isLoading = false;
        state.vehicles = action.payload;
        state.error = '';
       },
       fetchError(state, action: PayloadAction<string>) {
        state.isLoading = false;
        state.error = action.payload;
       }
    }
})

export default vehiclesSlice.reducer; 