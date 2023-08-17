import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { VehicleId } from "app/types/models";

interface vehicleState {
    isLoading: boolean;
    error: string;
    vehicle: VehicleId;
}

const initialState: vehicleState = {
    isLoading: false,
    error: '',
    vehicle: {
        id: '',
        name: '',
        type: '',
        description: '',
        image: '',
        preview: '',
        rent: null,
        specifications_text: '',
        team_text: '',
        term_text: '',
    }
}

export const vehicleIdSlice = createSlice({
    name: 'vehicles',
    initialState,
    reducers: {
       fetching(state) {
        state.isLoading = true;
       }, 
       fetchSuccess(state, action: PayloadAction<VehicleId>) {
        state.isLoading = false;
        state.vehicle = action.payload;
        state.error = '';
       },
       fetchError(state, action: PayloadAction<string>) {
        state.isLoading = false;
        state.error = action.payload;
       }
    }
})

export default vehicleIdSlice.reducer; 