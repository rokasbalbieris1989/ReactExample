import React from 'react';
import { carsPropType } from '../propTypes/cars';

export const CarTable = ({cars}) => {
    return <table>
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
            {cars.length === 0 && <tr>
                <td colSpan="6">There are no cars.</td>
            </tr>}
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
            {cars.map(car => <tr key={car.id}>
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
};

CarTable.defaultProps = {
    cars: [],
};

CarTable.propTypes = {
    cars: carsPropType,
}