import {ICar} from "../../interfaces/car.interface";
import "./car.css"
import React, {useState} from "react";
import showMoreImg from "../../assets/show-more.png"

interface carProps {
    car: ICar,
    onEditCar: (car: ICar) => void,
    onDeleteCar: (carId: number) => void
}

function Car(props: carProps) {

    const [showMore, setShowMore] = useState(false)

    return(
        <div className="car">
            <h3>{props.car.name} {props.car.model}</h3>
            <div className="car__show-more" onClick={() => {
                setShowMore(!showMore)
            }}>
                <img src={showMoreImg} alt="show-more" className="car__show-more-img"></img>
            </div>
            {
                showMore ?
                    <div className="car__additional">
                        <p>Цвет: {props.car.color}</p>
                        <p>Год: {props.car.year}</p>
                        <p>Цена: {props.car.price}</p>
                        <p>Координаты: ({props.car.latitude}, {props.car.longitude})</p>
                        <div className="car__actions">
                            <button className="car__btn" type="button" onClick={() => props.onEditCar(props.car)}>Редактировать</button>
                            <button className="car__btn car__btn_delete" type="button" onClick={() => props.onDeleteCar(props.car.id)}>Удалить</button>
                        </div>
                    </div>
                    :
                    <></>
            }
        </div>
    );
}

export default Car;