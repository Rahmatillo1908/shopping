import React from 'react'
import d from "../Assets/12.jpg"
import Footer from './Footer'
import Navbar from './Navbar'
import Products from './Products'
const Home = () => {
    return (
        <div className='hero' >
            <Navbar />
            <div className="card text-bg-dark border-0">
                <img src={d} style={{ height: "550px" }} className="card-img" alt="..." />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                        <h5 className="card-title display-3 fw-bolder mb-0">New Season Arrivals</h5>
                        <p className="card-text lead fs-2">
                            Check Out All The Trends
                        </p>
                    </div>
                </div>
            </div>
            <Products />
            <Footer />
        </div>
    )
}

export default Home