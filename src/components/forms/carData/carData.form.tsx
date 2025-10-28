import React, {useMemo, useState} from "react";
import {ICar} from "../../../interfaces/car.interface";
import "./carData.css"

interface FormData {
    car: ICar,
    onSave: (car: ICar) => void,
}

export const CarDataForm = (fd: FormData) => {

    const [formData, setFormData] = useState<ICar>(fd.car);

    const disable = useMemo(() => {
        return JSON.stringify(fd.car) === JSON.stringify(formData);
    }, [fd.car, formData])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value, type} = e.target;
        let processedValue: string | number = value;
        if (type === 'number') {
            processedValue = value === '' ? '' : Number(value);
        }
        setFormData(prevState => ({
            ...prevState,
            [name]: processedValue
        }));
    }

    const handleSave = () => {
        fd.onSave(formData)
    }

    return(
        <form name="carData">
            <label className="carData__field">
                <span className="carData__label">Название</span>
                <input
                    className="carData__input"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required/>
            </label>
            <label className="carData__field">
                <span className="carData__label">Модель</span>
                <input
                    className="carData__input"
                    type="text"
                    name="model"
                    value={formData.model}
                    onChange={handleChange}
                    required/>
            </label>
            <label className="carData__field">
                <span className="carData__label">Год</span>
                <input
                    className="carData__input"
                    type="number"
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    required/>
            </label>
            <label className="carData__field">
                <span className="carData__label">Цвет</span>
                <input
                    className="carData__input"
                    type="text"
                    name="color"
                    value={formData.color}
                    onChange={handleChange}
                    required/>
            </label>
            <label className="carData__field">
                <span className="carData__label">Цена</span>
                <input
                    className="carData__input"
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    required/>
            </label>
            <label className="carData__field">
                <span className="carData__label">Широта</span>
                <input
                    className="carData__input"
                    type="number"
                    name="latitude"
                    value={formData.latitude}
                    onChange={handleChange}
                    required/>
            </label>
            <label className="carData__field">
                <span className="carData__label">Долгота</span>
                <input
                    className="carData__input"
                    type="number"
                    name="longitude"
                    value={formData.longitude}
                    onChange={handleChange}
                    required/>
            </label>
            <div className="carData__action">
                <button type="button" className="carData__btn" disabled={disable} onClick={handleSave}>Сохранить</button>
            </div>
        </form>
    );
};