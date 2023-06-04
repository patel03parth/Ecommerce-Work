import React from 'react'
import '../CSS/Header.css'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const Header = () => {
    const cartLength = useSelector((state) => state.products.Carts.length)
    console.log("CartLength :",cartLength);
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="#">Co-working</a>
                    {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                    <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link to='/Home' className="nav-link text-white mx-3" href="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white mx-3" href="#">Benifits</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white mx-3" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white mx-3" href="#">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white mx-3" href="#">View</a>
                            </li>

                        </ul>

                        <ul className="navbar-nav">
                            <li className="nav-item"><a className="text-decoration-none nav-link text-white" href="#"><i
                                className="fa-brands fa-facebook-f"></i></a></li>
                            <li className="nav-item"><a className="text-decoration-none nav-link text-white" href="#"><i
                                className="fa-brands fa-instagram mx-3"></i></a></li>
                            <li className="nav-item"><a className="text-decoration-none nav-link text-white" href="#"><i
                                className="fa-brands fa-twitter"></i></a></li>
                            <li className="nav-item"><Link className="text-decoration-none nav-link text-white" to="/Cart"><i className="fa-solid fa-cart-shopping"><sup className='Sup'>{cartLength}</sup></i></Link></li>
                            <li className="nav-item"><Link className='btn btn-primary nav-link' to="/EcommerceLogin"><i className='fa-solid fa-user me-2'></i>Login</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Header
