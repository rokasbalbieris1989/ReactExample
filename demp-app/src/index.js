import React from 'react';
import ReactDOM from 'react-dom';

//importing from named export
import { CarTool } from './components/CarTool';

//importing from named export and changing the name
//import { CarTool as CarToolTest } from './components/CarTool';

//importing from default export
//import  CarTool  from './components/CarTool';

const carList =[
    { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2018, color: 'silver', price:30000},
    { id: 2, make: 'Tesla', model: 'S', year: 2017, color: 'red', price:120000},
];



ReactDOM.render(
    <CarTool cars={carList} />,
    document.querySelector('#root'),
)