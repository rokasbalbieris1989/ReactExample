import React, { useState } from 'react';

import {ToolHeader} from './ToolHeader';
import {CarTable} from './CarTable';
import {CarForm} from './CarForm';

//export const CarTool = (props)=> {
export const CarTool = ({ cars: initialCars })=> {

   //const [ cars,setCars ] = useState(props.cars.concat());
   const [ cars,setCars ] = useState(initialCars.concat());
   const [ editCarId, setEditCarId ] = useState(-1);
   
   const addCar = (car) => {
        setCars(cars.concat({
            ...car,
            id: Math.max(...cars.map(c => c.id)) + 1,
        }));
        setEditCarId(-1);
   };

   const replaceCar = (car) => {
    const newCars = cars.concat();
    const carIndex = newCars.findIndex(c => c.id === car.id);
    newCars[carIndex] = car;
    setCars(newCars);
    setEditCarId(-1);
   };

   const cancelCar = () => {
    setEditCarId(-1);
   };

   const deleteCar = carId => {
        setCars(cars.filter(car => car.id !== carId));
        setEditCarId(-1);
   };

    return <>
        <ToolHeader headerText="Car Tool" />
        <CarTable cars={cars} editCarId={editCarId} 
        onEditCar={setEditCarId} onDeleteCar={deleteCar}
        onSaveCar={replaceCar} onCancelCar={cancelCar}/>
        <CarForm buttonText='Add Car' onSubmitCar={addCar}/>

    </>;
};