import React, { useState } from 'react';

export const CarTool = (props)=> {
    //***destructuring props : export const Cartool = ({ cars: initialCars }) ... (with alliasing)

   const [ 
       carForm, // state data
        setCarForm // function to update the  state data and re-render
    ] = useState({
       make: '',
       model: '',
       year: 1900,
       color: '',
       price: 0,
   }); // initial state data, and is only used on the initial render

   const [ cars,setCars ] = useState(props.cars.concat());
   //***const [ cars,setCars ] = useState(initialCars.concat());

   const change = (e) => {
     setCarForm({
         ...carForm,
        [ e.target.name ]: e.target.type === 'number' ? Number(e.target.value):e.target.value,
     });
   };

        //*destructuring 
        //    const change = ({target}) => {
        //     setCarForm({
        //         ...carForm,
        //        [ target.name ]: target.type === 'number' ? Number(target.value):target.value,
        //     });
        //   };

        //**destructuring and using alliasing to destructure even more
        //    const change = ({target: { name, type, value } }) => {
        //     setCarForm({
        //         ...carForm,
        //        [ name ]: type === 'number' ? Number(value) : value,
        //     });
        //   };

   const addCar = () => {

        setCars(cars.concat({
            ...carForm,
            id: Math.max(...cars.map(c => c.id)) + 1,
        }));

        setCarForm({
            make: '',
            model: '',
            year: 1900,
            color: '',
            price: 0,
        });

   };

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
        <form>
            <div>
                <label htmlFor="make-input">Make:</label>
                <input type="text" id="make-input" name="make"
                value={carForm.make} onChange={change} />
            </div>
            <div>
                <label htmlFor="model-input">Model:</label>
                <input type="text" id="model-input" name="model"
                value={carForm.model}  onChange={change} />
            </div>
            <div>
                <label htmlFor="year-input">Year:</label>
                <input type="number" id="year-input" name="year"
                value={carForm.year}  onChange={change} />
            </div>
            <div>
                <label htmlFor="color-input">Color:</label>
                <input type="text" id="color-input" name="color"
                value={carForm.color}  onChange={change} />
            </div>
            <div>
                <label htmlFor="price-input">Price:</label>
                <input type="number" id="price-input" name="price"
                value={carForm.price}  onChange={change} />
            </div>
            <button type="button" onClick={addCar}>Add Car</button>
        </form>

    </>;
}