import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Skeleton from "react-loading-skeleton"
import Navbar from './Navbar'
import 'react-loading-skeleton/dist/skeleton.css'

const Products = () => {
    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data)
    const [loading, setLoading] = useState(false)
    let commounted = true

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true)
            const response = await fetch("https://fakestoreapi.com/products");
            if (commounted) {
                setData(await response.clone().json())
                setFilter(await response.json())
                setLoading(false)
                console.log(filter);
            }
            return () => {
                commounted = false
            }
        }
        getProducts()
    }, [])

    const Loading = () => {
        return (
            <>
                <div className="col-md-3">
                    <Skeleton height="350px" />
                </div>
                <div className="col-md-3">
                    <Skeleton height="350px" />
                </div>
                <div className="col-md-3">
                    <Skeleton height="350px" />
                </div>
                <div className="col-md-3">
                    <Skeleton height="350px" />
                </div>
            </>
        )
    }

    const filterProduct = (cat) => {
        const updatedList = data.filter((x) => x.category === cat)
        setFilter(updatedList)
    }

    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className='btn btn-outline-dark me-2' onClick={() => setFilter(data)} >All</button>
                    <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
                    <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
                    <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("jewelery")}>Jewelary </button>
                    <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("electronics")}>Electronic </button>
                </div>
                {
                    filter.map((product) => {

                        return (
                            <>
                                <div className="col-md-3 mb-4">
                                    <div className="card h-100 text-center p-4" key={product.id} >
                                        <img src={product.image} className="card-img-top"
                                            height="250px" alt={product.title} />
                                        <div className="card-body">
                                            <h5 className="card-title mb-0">{product.title.substring(0, 12)}</h5>
                                            <p className="card-text lead ">
                                                ${product.price}
                                            </p>
                                            <NavLink to={`/products/${product.id}`}
                                                className="btn btn-outline-dark">Buy Now</NavLink>
                                        </div>

                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </>
        )
    }
    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className='display-6 fw-bolder text-center' >Latest Products</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    )
}

export default Products