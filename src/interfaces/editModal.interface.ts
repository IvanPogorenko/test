import {ICar} from "./car.interface";

export interface IEditModal<T = ICar> {
    modalActive: boolean,
    data: T,
    onCloseModal: () => void,
    onUpdateData?: (data: T) => void,
}