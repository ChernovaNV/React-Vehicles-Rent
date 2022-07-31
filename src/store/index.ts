import { configureStore } from "@reduxjs/toolkit";
import {  combineReducers  } from "redux";
import vehicleIdReduser from "./slices/vehicleIdSlice";
import vehiclesReducer  from "./slices/vehiclesSlice";


const rootReduser = combineReducers({
    vehicles: vehiclesReducer,
    vehicle: vehicleIdReduser
})

export function setupStore() {
    return configureStore({
        reducer: rootReduser
    })
}

export type RootState = ReturnType<typeof rootReduser>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch']