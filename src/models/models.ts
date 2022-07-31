export interface IVehicles {
    id: string;
    name: string; 
    type: string;
    description: string;
    preview: string;
    rent: number;
}

export interface IVehicleId {
    id: string;
    name: string;
    type: string;
    description: string;
    image: string;
    preview: string;
    rent: number | null;
    specifications_text: string;
    team_text: string;
    term_text: string;
}

export interface ServerError {
    error: string;
}