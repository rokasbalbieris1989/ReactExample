import React from 'react';

export const CarTool = (props)=> {

   

    return <>
        <header>
            <h1>Car Tool</h1>
        </header>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Make</th>
                    <th>Model</th>
                    <th>Year</th>
                    <th>Color</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {/* <tr>
                    <td>1</td>
                    <td>Ford</td>
                    <td>Fusion Hybrid</td>
                    <td>2018</td>
                    <td>Silver</td>
                    <td>30000</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Tesla</td>
                    <td>S</td>
                    <td>2017</td>
                    <td>Red</td>
                    <td>120000</td>
                </tr>    */}
                {props.cars.map(car => <tr key={car.id}>
                    <td>{car.id}</td>
                    <td>{car.make}</td>
                    <td>{car.model}</td>
                    <td>{car.year}</td>
                    <td>{car.color}</td>
                    <td>{car.price}</td>
                </tr>)}
            </tbody>
            {/* <tfoot>
                <tr>Footer of table</tr>
            </tfoot> */}
        </table>

    </>;
}