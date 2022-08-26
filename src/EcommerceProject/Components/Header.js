import React from 'react'
import '../CSS/Header.css'

const Header = () => {
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="#">Co-working</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link text-white mx-3" href="#">Home</a>
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
                            <li className="nav-item"><a className="text-decoration-none nav-link text-white" href="#"><i className="fa-solid fa-cart-shopping"><sup className='Sup'>0</sup></i></a></li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Header
