import React from 'react'
import "../CSS/Footer.css"

const Footer = () => {
    return (
        <div>
            <footer className='bg-dark'>
            <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <div className="COL1">
                        <h2>Coworking Space</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eveniet nam fugiat!</p>
                        <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#"><i className="fa-brands fa-twitter"></i></a>
                        <div className="box">
                            <input className='ps-2 my-3'  type="text" placeholder="Subscriber" />
                            <button className='px-2'>Go</button>
                        </div>
                        <p>© Copyright 2025 - All Rights Reserved</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="COL2">
                        <h3>About</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, dolores beatae. Quibusdam
                            placeat
                            error neque nisi dignissimos ex doloribus in earum quisquam beatae, dolore repudiandae
                            eveniet,
                            illo praesentium, asperiores nobis iusto eum ipsa? Magni cum voluptatum eveniet esse.</p>
                        <p><i className="fa-solid fa-location-dot" style={{ padding: "0 4px" }}></i>350 5th Ave, New York, NY
                            10118
                        </p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="COL3">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#">Orders</a></li>
                            <li><a href="#">Support</a></li>
                            <li><a href="#">Forums</a></li>
                            <li><a href="#">Privacy & Policy</a></li>
                            <li><a href="#">Terms</a></li>
                        </ul>
                        <a href="tel:+88 123 456 78 90"><i className="fa-solid fa-phone"></i> +88 123 456 78 90<br /></a>
                        <a href="mailto:patel033parth@gmail.com"><i
                            className="fa-solid fa-envelope"></i> patel033parth@gmail.com</a>
                    </div>
                </div>
            </div>
            </div>
            </footer>

        </div>
    )
}

export default Footer
