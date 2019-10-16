import React, { memo } from 'react';
import { carsPropType } from '../propTypes/cars';
import PropTypes from 'prop-types';

import { ViewCarRow } from './ViewCarRow';
import { EditCarRow } from './EditCarRow';

export const CarTable = memo(({
    cars, editCarId,
    onEditCar: editCar,
    onDeleteCar: deleteCar,
    onSaveCar: saveCar,
    onCancelCar: cancelCar,
}) => {
    
    return <table>
        <thead>
            <tr>
                <th>Id</th>
                <th><label htmlFor="edit-make-input">Make</label></th>
                <th><label htmlFor="edit-mdel-input">Model</label></th>
                <th><label htmlFor="edit-year-input">Year</label></th>
                <th><label htmlFor="edit-color-input">Color</label></th>
                <th><label htmlFor="edit-price-input">Price</label></th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {cars.length === 0 && <tr>
                <td colSpan="7">There are no cars.</td>
            </tr>}
            
            {cars.map(car => car.id === editCarId
                ? <EditCarRow key={car.id} car={car}
                    onSaveCar={saveCar}  onCancelCar={cancelCar} />
                : <ViewCarRow key={car.id} car={car}
                    onEditCar={editCar}  onDeleteCar={deleteCar} />)}
        </tbody>
        {/* <tfoot>
            <tr>Footer of table</tr>
        </tfoot> */}
    </table>
});

CarTable.defaultProps = {
    cars: [],
    editCarId: -1,
};

CarTable.propTypes = {
    cars: carsPropType,
    editCarId: PropTypes.number,
    onEditCar: PropTypes.func.isRequired,
    onDeleteCar: PropTypes.func.isRequired,
    onSaveCar: PropTypes.func.isRequired,
    onCancelCar: PropTypes.func.isRequired,
};