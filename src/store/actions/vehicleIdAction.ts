import PostService from "API/request";
import { IVehicleId } from "models/models";
import { AppDispatch } from "store";
import { vehicleIdSlice } from "store/slices/vehicleIdSlice";

export const fetchVehicleById = (id: string | undefined) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(vehicleIdSlice.actions.fetching())
            const res: IVehicleId = await PostService.getById(id)
            dispatch(vehicleIdSlice.actions.fetchSuccess(res))
        } catch(err: any) {
            dispatch(vehicleIdSlice.actions.fetchError(err.error as string))
        }
    }
}