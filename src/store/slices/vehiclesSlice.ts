import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IVehicles } from 'models/models'

interface vehiclesState {
    isLoading: boolean;
    error: string;
    vehicles: IVehicles[];
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
       fetchSuccess(state, action: PayloadAction<IVehicles[]>) {
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