import {ICar} from "../../interfaces/car.interface";

export const createEmptyCar = (): ICar => ({
    id: 0,
    name: '',
    model: '',
    year: new Date().getFullYear(),
    color: '',
    price: 0,
    latitude: 0,
    longitude: 0
});