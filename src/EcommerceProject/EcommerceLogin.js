import axios from 'axios';
import React, { useState } from 'react'
import './CSS/Login.css'
import { Link } from 'react-router-dom';

export default function EcommerceLogin() {

    const [data, setData] = useState({

        email: "",
        password: "",

    })

    const changSet = (e) => {

        setData({ ...data, [e.target.name]: e.target.value });
    }

    const mySaveData = (e) => {

        e.preventDefault();

        axios.post("http://localhost:8002/api/auth/login", data, {

            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": `Bearer`
            }
        })
            .then(y => {

                console.log(y)
                localStorage.setItem("data", JSON.stringify(y.data));

            })
        console.log(data);
    }


    return (
        <div className='Bg'>

            <form className='card' onSubmit={mySaveData}>

                <h1>Sign In</h1>

                <div className="col-auto-a">
                    <label className="col-form-label">Email</label>
                </div>
                <div className="col-auto-a">
                    <input type="email" className="form-control" name='email' onChange={changSet} />
                </div>

                <div className="col-auto-a">
                    <label className="col-form-label">Password</label>
                </div>
                <div className="col-auto-a">
                    <input type="password" className="form-control" name='password' onChange={changSet} />
                </div>

                <div className='button m-5'>
                    <button className='bt'>Login</button>
                </div>

                <div className='row1'>

                    <p className='me-2'>Don't have Account?</p>
                    <Link to="/EcommerceRegistration">Sign Up</Link>

                </div>

            </form>
        </div>
    )
}