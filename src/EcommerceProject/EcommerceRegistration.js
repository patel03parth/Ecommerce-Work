import React, { useState } from 'react';
import axios from 'axios';
import "./CSS/Regi.css"
import { Link } from 'react-router-dom';

export default function EcommerceRegistration() {

    const [data, setData] = useState({
        username: "",
        name: "",
        email: "",
        password: "",
        confirmpassword: "",
        role: "",
        phone: "",
        address: "",
        companyName: "",
        image: ""

    })

    const changSet = (e) => {

        if (e.target.type == "file")
            setData({ ...data, [e.target.name]: e.target.files[0] });
        else
            setData({ ...data, [e.target.name]: e.target.value });
    }

    const mySaveData = (e) => {

        e.preventDefault();
        var formData = new FormData();

        formData.append("username", data.username);
        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("password", data.password)
        formData.append("confirmpassword", data.passwordConfirmation);
        formData.append("role", data.role);
        formData.append("phone", data.phone);
        formData.append("address", data.address)
        formData.append("companyName", data.companyName);
        formData.append("image", data.image);



        axios.post("http://localhost:8002/api/auth/register", formData).then(y => {

            console.log(y);

        })
    }


    return (
        <div className='Bg1'>

            <form className='card1' onSubmit={mySaveData}>

                <h1>Sign Up</h1>

                <div className='d-flex'>

                    <div className="col-auto">
                        <input type="text" className="form-control" name='username' placeholder='UserName' onChange={changSet} />
                    </div>

                    <div className="col-auto">
                        <input type="text" className="form-control" name='name' placeholder='Name' onChange={changSet} />
                    </div>

                </div>

                <div className='d-flex'>

                    <div className="col-auto">

                        <input type="email" className="form-control" name='email' placeholder='Email' onChange={changSet} />
                    </div>

                    <div className="col-auto">
                        <input type="password" className="form-control" name='password' placeholder='Password' onChange={changSet} />
                    </div>

                    <div className="col-auto">
                        <input type="password" className="form-control" name='confirmpassword' placeholder='ConfirmPassword' onChange={changSet} />
                    </div>

                    <select className='select px-2' name='role'>
                        <option value='user'>User</option>
                        <option value='seller'>Seller</option>
                    </select>

                </div>

                <div className='d-flex'>

                    <div className="col-auto">
                        <input type="password" className="form-control" placeholder='Phone' name='phone' onChange={changSet} />
                    </div>

                    <div className="col-auto">
                        <input type="password" className="form-control" name='address' placeholder='Address' onChange={changSet} />
                    </div>

                    <div className="col-auto">
                        <input type="password" className="form-control" name='companyName' placeholder='Company Name' onChange={changSet} />
                    </div>

                </div>

                <div className="col-auto">
                    <input type="file" className="form-control" name='image' onChange={changSet} />
                </div>

                <div className='button1 mx-auto my-4'>
                    <button type="button" className='bt1'>Register</button>
                </div>

                <div className='row1'>

                    <p className='me-2'>Already have an Account?</p>
                    <Link to="/EcommerceLogin">Sign In</Link>

                </div>
            </form>

        </div>
    )
}