import React from 'react';
import { Routes, Route} from 'react-router-dom'
import Home from '../Home/Home';
import Restaurants from '../Restaurants/Restaurants';
import AddRestaurant from '../AddRestaurant/AddRestaurant';
import Edit from '../Edit/Edit'

function Main(props) {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/restaurants' element={<Restaurants/>}></Route>
                <Route path='/addrest' element={<AddRestaurant/> }></Route>
                <Route path='/restaurants/edit/:id' element={<Edit/> }></Route>
            </Routes>
        </div>
    );
}

export default Main;