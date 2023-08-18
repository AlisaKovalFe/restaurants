import React from 'react';
import { Routes, Route} from 'react-router-dom'
import Home from '../Home/Home';
import Restaurants from '../Restaurants/Restaurants';
import AddRestaurant from '../AddRestaurant/AddRestaurant';
import Edit from '../Edit/Edit'
import ToMap from '../ToMap/ToMap'

function Main(props) {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/restaurants' element={<Restaurants/>}></Route>
                <Route path='/addrest' element={<AddRestaurant/> }></Route>
                <Route path='/restaurants/edit/:id' element={<Edit/> }></Route>
                <Route path='/tomap' element={<ToMap/> }></Route>
            </Routes>
        </div>
    );
}

export default Main;