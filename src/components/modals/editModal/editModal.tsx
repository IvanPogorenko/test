import "./editModal.css"
import closeIcon from "../../../assets/close.png";
import {IEditModal} from "../../../interfaces/editModal.interface";
import {CarDataForm} from "../../forms/carData/carData.form";
import {ICar} from "../../../interfaces/car.interface";

export function EditModal(props : IEditModal) {

    if (!props.modalActive) return null

    const handleSave = (updatedCar: ICar) => {
        if (props.onUpdateData) {
            props.onUpdateData(updatedCar);
        }
        props.onCloseModal();
    }

    return(
        <div className="modal">
            <div className="modal__wrapper">
                <div className="modal__content">
                    <div className="modal__action_close" onClick={props.onCloseModal}>
                        <img className="modal__close-icon" src={closeIcon} alt="close"/>
                    </div>
                    <CarDataForm car={props.data} onSave={handleSave}></CarDataForm>
                </div>
            </div>
        </div>
    );
}


