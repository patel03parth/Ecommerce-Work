import React from 'react'

const Header = () => {
    return (
        <div>

            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container">
                    <a class="navbar-brand" href="#">Co-working</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-between" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link text-white mx-3" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white mx-3" href="#">Benifits</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white mx-3" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white mx-3" href="#">Blog</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white mx-3" href="#">View</a>
                            </li>
                            
                        </ul>

                        <ul class="navbar-nav">
                            <li class="nav-item"><a class="text-decoration-none nav-link text-white" href="#"><i
                                class="fa-brands fa-facebook-f"></i></a></li>
                            <li class="nav-item"><a class="text-decoration-none nav-link text-white" href="#"><i
                                class="fa-brands fa-instagram mx-3"></i></a></li>
                            <li class="nav-item"><a class="text-decoration-none nav-link text-white" href="#"><i
                                class="fa-brands fa-twitter"></i></a></li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Header
