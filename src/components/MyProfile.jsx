import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import '../styles/MyProfile.css'
import WishCard from './WishCard'
import { useState } from 'react'
import FormInput from './FormInput'

const def = {
    wish: false,
    password: false,
    name: false,
    address: false,
    email: false,
}

function MyProfile() {
    const [open, setOpen] = useState(def)
    const [values, setValues] = useState({
        password: {
            oldpassword: '',
            password: '',
            confirmPassword: '',
        },
        name: {
            firstName: '',
            lastName: ''
        },
        address: {
            city: '',
            street: '',
            zipcode: '',
        },
        email: {
            oldemail: '',
            email: '',
            confirmEmail: '',
        }

    })

    const inputs = {
        password: [
            {
                id: 1,
                name: "oldpassword",
                type: "password",
                placeholder: "Old Password",
                label: "Old Password",
                errorMessage:
                    "Password should be 8-20 chars must includ at least 1 letter , 1 number and 1 spatial char",
                required: true,
                pattern:
                    "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$",
            },
            {
                id: 2,
                name: "password",
                type: "password",
                placeholder: "Password",
                label: "Password",
                errorMessage:
                    "Password should be 8-20 chars must includ at least 1 letter , 1 number and 1 spatial char",
                required: true,
                pattern:
                    "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$",
            }, {
                id: 3,
                name: "confirmPassword",
                type: "password",
                placeholder: "Confirm Password",
                label: "Confirm Password",
                errorMessage: "Password dont match ",
                required: true,
                pattern: values.password.password,
            },
        ],
        name: [
            {
                id: 1,
                name: "firstName",
                type: "text",
                placeholder: "First Name",
                label: "First Name",
                errorMessage:
                    "First name should be 3-16 chars and not inclued speatial char",
                pattern: "^[A-Za-z0-9]{3,16}$",
                required: true,
            }, {
                id: 2,
                name: "lastName",
                type: "text",
                placeholder: "Last Name",
                label: "Last Name",
                errorMessage:
                    "Last name should be 3-16 chars and not inclued speatial char",
                pattern: "^[A-Za-z0-9]{3,16}$",
                required: true,
            }
        ],
        address: [
            {
                id: 1,
                name: "city",
                type: "text",
                placeholder: "City",
                label: "City",
                errorMessage:
                    "city should be 2-10 chars and not inclued speatial char or number",
                pattern: "^[A-Za-z]{2,10}$",
                required: true,
            },
            {
                id: 2,
                name: "street",
                type: "text",
                placeholder: "Street",
                label: "Street",
                errorMessage:
                    "street should be 2-10 chars and not inclued speatial char or number",
                pattern: "^[A-Za-z]{2,10}$",
                required: true,
            },
            {
                id: 3,
                name: "zipcode",
                type: "number",
                placeholder: "Zip code",
                label: "Zip code",
                errorMessage:
                    "zipcode should be 3-16 chars and not inclued speatial char or number",
                pattern: "^[0-9]{4,10}$",
                required: false,
            }
        ],
        email: [
            {
                id: 1,
                name: "oldemail",
                type: "email",
                placeholder: "Old Email",
                label: "Old Email",
                errorMessage: "should be a valid email",
                required: true,
                pattern: "^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$",
            },
            {
                id: 2,
                name: "email",
                type: "email",
                placeholder: "Email",
                label: "Email",
                errorMessage: "should be a valid email",
                required: true,
                pattern: "^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$",
            },
            {
                id: 3,
                name: "confirmEmail",
                type: "email",
                placeholder: "Confirm Email",
                label: "Confirm Email",
                errorMessage: "should be a valid email",
                required: true,
                pattern: "^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$",
            }
        ],
    }
    console.log(values)
    const handleChange = (e, name) => {
        setValues({ ...values, [name]: { ...values[name], [e.target.name]: e.target.value } });
    };

    function handleClick(e) {
        setOpen({ ...def, [e.target.id]: true })
    }
    return (
        <>
            <section className="profile">
                <div className="profile-left">
                    <h3 style={{ textDecoration: "underline" }}>My Profile</h3>
                    <ul className="myAccount-list">
                        <li id="password" onClick={handleClick}>Change password</li>
                        <li id="name" onClick={handleClick}>Change name</li>
                        <li id="address" onClick={handleClick}>Change address</li>
                        <li id="email" onClick={handleClick}>Change email</li>
                    </ul>
                    <div>
                        <p className="wishlist-btn" id="wish" aria-valuetext="wishlist" onClick={handleClick}>my Wishlist</p>
                    </div>
                </div>

                <div className="profile-right">
                    {open.wish ? <div className="wishlist ">
                        <WishCard amount={10} />
                        <WishCard amount={0} />
                        <WishCard amount={12} />
                        <WishCard amount={5} />
                        <WishCard amount={3} />
                    </div> : ''}
                    {open.password ? <div className="change-password ">
                        <h2>change password</h2>
                        {inputs.password.map(input => {
                            return (
                                <FormInput
                                    key={input.id}
                                    {...input}
                                    value={values.password[input.name]}
                                    onChange={(e) => handleChange(e, 'password')}
                                />
                            )
                        })}
                        <button>Save</button>
                    </div> : ''}
                    {open.name ? <div className="change-name ">
                        <h2>change name</h2>
                        {inputs.name.map(input => {
                            return (
                                <FormInput
                                    key={input.id}
                                    {...input}
                                    value={values.name[input.name]}
                                    onChange={(e) => handleChange(e, 'name')}
                                />
                            )
                        })}
                        <button>Save</button>
                    </div> : ''}
                    {open.address ? <div className="change-address ">
                        <h2>Change address</h2>
                        {inputs.address.map(input => {
                            return (
                                <FormInput
                                    key={input.id}
                                    {...input}
                                    value={values.address[input.name]}
                                    onChange={(e) => handleChange(e, 'address')}
                                />
                            )
                        })}
                        <button>Save</button>
                    </div> : ''}
                    {open.email ? <div className="change-email ">
                        <h2>change email</h2>
                        {inputs.email.map(input => {
                            return (
                                <FormInput
                                    key={input.id}
                                    {...input}
                                    value={values.email[input.name]}
                                    onChange={(e) => handleChange(e, 'email')}
                                />
                            )
                        })}
                        <button>Save</button>
                    </div> : ''}
                </div>
            </section>
        </>
    )
}

export default MyProfile