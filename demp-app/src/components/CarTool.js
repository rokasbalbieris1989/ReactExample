import React, { useState, useCallback } from 'react';

import { useDefaultInputFocus } from '../hooks/useDefaultInputFocus'; 

import {ToolHeader} from './ToolHeader';
import {CarTable} from './CarTable';
import {CarForm} from './CarForm';

//export const CarTool = (props)=> {
export const CarTool = ({ cars: initialCars })=> {

   //const [ cars,setCars ] = useState(props.cars.concat());
   const [ cars,setCars ] = useState(initialCars.concat());
   const [ editCarId, setEditCarId ] = useState(-1);

   const defaultInputRef = useDefaultInputFocus();
        
   const init = useCallback(() => {
        setEditCarId(-1);
        if (defaultInputRef.current) {
            defaultInputRef.current.focus();
        }
   }, [ defaultInputRef ]);

   const addCar = useCallback((car) => {
        setCars(cars.concat({
            ...car,
            id: Math.max(...cars.map(c => c.id)) + 1,
        }));
        init();
   }, [ cars, init ]);

   const replaceCar = useCallback((car) => {
    const newCars = cars.concat();
    const carIndex = newCars.findIndex(c => c.id === car.id);
    newCars[carIndex] = car;
    setCars(newCars);
    init();
   }, [ cars, init ]);

   const cancelCar = useCallback(() => {
    init();
   }, [ init ]);

   const deleteCar = useCallback(carId => {
        setCars(cars.filter(car => car.id !== carId));
        init();
   }, [ cars, init ]);

    return <>
        <ToolHeader headerText="Car Tool" />
        <CarTable cars={cars} editCarId={editCarId} 
        onEditCar={setEditCarId} onDeleteCar={deleteCar}
        onSaveCar={replaceCar} onCancelCar={cancelCar}/>
        <CarForm buttonText='Add Car' onSubmitCar={addCar}
         ref={defaultInputRef}/>

    </>;
};