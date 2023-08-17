import { VehicleId, Vehicles } from 'app/types/models';
import vehicles from './vehicles.json';

/** True = 65%, False = 35% */
const rejectByChance = () => {
    return Math.random() <= 0;  
};

/** Emulate request */
export const getVehicles:((result: Vehicles[] | VehicleId | undefined) => Promise<Vehicles[] | VehicleId | undefined>) = (result) => {
    
    return new Promise((resolve, reject) => {
        if (rejectByChance() || !result) {
             reject({
                error: 'Server error',
            });
        }
        const delay = Math.ceil(Math.random() * 1000);
        setTimeout(() => {
            resolve(result);
        }, delay);
    }); 

}

export default class PostService {
    static async getAll() {
        const allVehicles: Vehicles[] = vehicles.reduce((all: Vehicles[], item) => {
            return all= [
                ...all, 
                {
                id: item.id,
                name: item.name, 
                type: item.type,
                description: item.description,
                preview: item.preview,
                rent: item.rent,
                }
            ]
        }, [])
        return getVehicles(allVehicles) 
    }
    static async getById(id: string | undefined) {
        const VehicleById: VehicleId | undefined = vehicles.find(item => item.id === id)
        
        return getVehicles(VehicleById) 
    }
}