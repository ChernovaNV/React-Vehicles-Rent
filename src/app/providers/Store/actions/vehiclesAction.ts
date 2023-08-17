import { AppDispatch } from "app/providers/Store/index"
import { vehiclesSlice } from "../slices/vehiclesSlice"
import PostService from "shared/api/request"
import { Vehicles } from "app/types/models"


export const fetchVehicles = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(vehiclesSlice.actions.fetching())
            const res: Vehicles[] = await PostService.getAll()
            
            dispatch(vehiclesSlice.actions.fetchSuccess(res))
        } catch(err: any) {
            dispatch(vehiclesSlice.actions.fetchError(err.error as string))
        }
    }
}