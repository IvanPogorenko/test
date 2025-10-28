import React, {useState} from 'react';
import './App.css';
import Car from "./components/car/car";
import {SortOption} from "./interfaces/car-sort.interface";
import SortPanel from "./components/sort-panel/sort-panel";
import {useSort} from "./components/sort-panel/useSort";
import {EditModal} from "./components/modals/editModal/editModal";
import {ICar} from "./interfaces/car.interface";
import {useCar} from "./components/car/useCar";
import {createEmptyCar} from "./components/car/emptyCar";

function App() {

    const {cars, deleteCar, updateCar, createCar} = useCar()

    const [sortBy, setSortBy] = useState<SortOption>('');
    const sortedCars = useSort(sortBy, cars)

    const [modalActive, setModalActive] = useState(false)
    const [editCar, setEditCar] = useState<ICar>({} as ICar)
    const [isEditing, setIsEditing] = useState(true)

    const handleOpenAddModal = () => {
        setEditCar(createEmptyCar())
        setIsEditing(false) // режим создания
        setModalActive(true)
    }

    const handleOpenEditModal = (car: ICar) => {
        setEditCar(car)
        setIsEditing(true) // режим редактирования
        setModalActive(true)
    }

    const handleSaveCar = (carData: ICar) => {
        if (isEditing) {
            updateCar(carData)
        } else {
            createCar(carData)
        }
    }

  return (
    <div className="App">
        <div className="content">
            <SortPanel sortBy={sortBy} onSortChange={setSortBy}/>
            <EditModal
                data={editCar}
                modalActive={modalActive}
                onCloseModal={() => {
                    setModalActive(false);
                    setEditCar({} as ICar);
                }}
                onUpdateData={handleSaveCar}/>
            <div className="content__action">
                <button type="button" className="content__btn" onClick={handleOpenAddModal}>Добавить</button>
            </div>
            <div className="cars">
                {sortedCars.map(car =>
                    <Car
                        key={car.id}
                        car={car}
                        onEditCar={handleOpenEditModal}
                        onDeleteCar={(id) => deleteCar(id)}
                    />)}
            </div>
        </div>
    </div>
  );
}

export default App;
