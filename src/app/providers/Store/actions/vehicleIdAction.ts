import { AppDispatch } from "app/providers/Store/index"
import { vehiclesSlice } from "../slices/vehiclesSlice"
import { VehicleId } from "app/types/models"
import PostService from "shared/api/request"
import { vehicleIdSlice } from "../slices/vehicleIdSlice"


export const fetchVehicleById = (id: string | undefined) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(vehiclesSlice.actions.fetching())
            const res: VehicleId = await PostService.getById(id)
            dispatch(vehicleIdSlice.actions.fetchSuccess(res))
        } catch(err: any) {
            dispatch(vehicleIdSlice.actions.fetchError(err.error as string))
        }
    }
}