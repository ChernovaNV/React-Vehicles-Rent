import PostService from "API/request";
import { IVehicles } from "models/models";
import { AppDispatch } from "store";
import {vehiclesSlice} from "store/slices/vehiclesSlice";

export const fetchVehicles = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(vehiclesSlice.actions.fetching())
            const res: IVehicles[] = await PostService.getAll()
            
            dispatch(vehiclesSlice.actions.fetchSuccess(res))
        } catch(err: any) {
            dispatch(vehiclesSlice.actions.fetchError(err.error as string))
        }
    }
}