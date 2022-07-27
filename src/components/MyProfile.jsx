import React from 'react'
import '../styles/MyProfile.css'
import WishCard from './WishCard'
import { useState } from 'react'
import FormInput from './FormInput'
import { inputsArr, myValues } from '../inputs/myAccountInputs'


const def = {
    wish: false,
    password: false,
    name: false,
    address: false,
    email: false,
}

function MyProfile() {
    const [open, setOpen] = useState(def)
    const [values, setValues] = useState(myValues)
    const inputs = inputsArr()
    inputs.password[2].pattern = values.password.password

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