import {useEffect, useState} from "react";
import {ICar} from "../../interfaces/car.interface";
import {baseUrlInterceptor} from "../../api/base-url.interceptor";

export const useCar = () => {
    const [cars, setCars] = useState<ICar[]>([]);

    useEffect(() => {
        const loadCars = async () => {
            const data : ICar[] = await baseUrlInterceptor("/vehicles");
            setCars(data);
        }

        loadCars();
    }, []);

    const deleteCar = (id: number) => {
        setCars(prevCars => prevCars.filter(car => car.id !== id));
    }

    const updateCar = (car: ICar) => {
        setCars(prevCars => prevCars.map(c => c.id === car.id ? {...c, ...car} : c))
    }

    const createCar = (car: ICar) => {
        cars.sort((a, b) => b.id - a.id)
        const newCar = {
            ...car,
            id: cars[0].id + 1
        }
        setCars([...cars, newCar]);
    }

    return {
        cars,
        deleteCar,
        updateCar,
        createCar
    };
}