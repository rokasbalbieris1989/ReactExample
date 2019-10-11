import React, { useState } from 'react';

import {ToolHeader} from './ToolHeader';
import {CarTable} from './CarTable';
import {CarForm} from './CarForm';

export const CarTool = (props)=> {
    //***destructuring props : export const Cartool = ({ cars: initialCars }) ... (with alliasing)

   const [ cars,setCars ] = useState(props.cars.concat());
   //***const [ cars,setCars ] = useState(initialCars.concat());
   
   const addCar = (car) => {

        setCars(cars.concat({
            ...car,
            id: Math.max(...cars.map(c => c.id)) + 1,
        }));
   };

    return <>
        <ToolHeader headerText="Car Tool" />
        <CarTable cars={cars}/>
        <CarForm buttonText='Add Car' onSubmitCar={addCar}/>

    </>;
}