import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Component/Home'
import Route2 from './Component/Yordam/Route2'
import Yordam from './Component/Yordam/Yordam'

const Project1 = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/products' element={<Yordam />} />
                <Route path='/products/:id' element={<Route2 />} />
                <Route path='*' element={404} />
            </Routes>
        </div>
    )
}

export default Project1