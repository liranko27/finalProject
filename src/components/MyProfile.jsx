import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import '../styles/MyProfile.css'
import WishCard from './WishCard'
import { useState } from 'react'
function MyProfile() {
    const def = {
        wish: false,
        password: false,
        name: false,
        address: false,
        email: false,
    }
    const [open, setOpen] = useState(def)

    function handleClick(click) {
        def[click] = true
        setOpen({ ...def })
    }
    return (
        <>
            <section className="profile">
                <div className="profile-left">
                    <h3 style={{ textDecoration: "underline" }}>My Profile</h3>
                    <ul className="myAccount-list">
                        <li onClick={() => handleClick('password')}>Change password</li>
                        <li onClick={() => handleClick('name')}>Change name</li>
                        <li onClick={() => handleClick('address')}>Change address</li>
                        <li onClick={() => handleClick('email')}>Change email</li>
                    </ul>
                    <div>
                        <p className="wishlist-btn" aria-valuetext="wishlist" onClick={() => handleClick('wish')}>my Wishlist</p>
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
                        <div>
                            <label >Previus password</label>
                            <input type="password" id="oldpass" />
                        </div>
                        <div>
                            <label >New password</label>
                            <input type="password" id="newpass" />
                        </div>
                        <div>
                            <label >Confirm password</label>
                            <input type="newpassc" id="newpassc" />
                        </div>
                        <button>Save</button>
                    </div> : ''}
                    {open.name ? <div className="change-name ">
                        <h2>change name</h2>
                        <div>
                            <label >First name</label>
                            <input type="text" id="name" />
                        </div>
                        <div>
                            <label >Last name</label>
                            <input type="text" id="lname" />
                        </div>
                        <button>Save</button>
                    </div> : ''}
                    {open.address ? <div className="change-address ">
                        <h2>Change address</h2>
                        <div>
                            <label >City</label>
                            <input type="text" id="city" />
                        </div>
                        <div>
                            <label >Street</label>
                            <input type="text" id="street" />
                        </div>
                        <div>
                            <label >Zip code</label>
                            <input type="text" id="zip" />
                        </div>
                        <button>Save</button>
                    </div> : ''}
                    {open.email ? <div className="change-email ">
                        <h2>change email</h2>
                        <div>
                            <label >Current Email</label>
                            <input type="email" />
                        </div>
                        <div>
                            <label >New Email</label>
                            <input type="email" />
                        </div>
                        <div>
                            <label >Confirm Email</label>
                            <input type="email" />
                        </div>
                        <button>Save</button>
                    </div> : ''}
                </div>
            </section>
        </>
    )
}

export default MyProfile