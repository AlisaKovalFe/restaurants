import React from 'react';
import { Routes, Route} from 'react-router-dom'
import Home from '../Home/Home';
import Restaurants from '../Restaurants/Restaurants';
import AddRestaurant from '../AddRestaurant/AddRestaurant';
import Edit from '../Edit/Edit'
import ToMap from '../ToMap/ToMap'
import ToRestaurantMap from '../ToRestaurantMap/ToRestaurantMap'
import Error from '../../components/Error/Error'

function Main(props) {

    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/restaurants' element={<Restaurants/>}></Route>
                <Route path='/addrest' element={<AddRestaurant/> }></Route>
                <Route path='/restaurants/restaurant-edit/:id' element={<Edit/> }></Route>               
                <Route path='restaurants/restaurant-map/:id' element={<ToRestaurantMap/> }></Route>
                <Route path='/tomap' element={<ToMap/> }></Route>
                <Route path='/error' element={<Error/> }></Route>
            </Routes>
        </div>
    );
}

export default Main;