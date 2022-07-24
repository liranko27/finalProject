import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import '../styles/MyProfile.css'
import WishCard from './WishCard'

function MyProfile() {
    return (
        <>
            <Navbar />
            <section className="profile">
                <div className="profile-left">
                    <h3 style={{ textDecoration: "underline" }}>My Profile</h3>
                    <ul className="myAccount-list">
                        <li >Change password</li>
                        <li >Change name</li>
                        <li >Change address</li>
                        <li >Change email</li>
                    </ul>
                    <div>
                        <p className="wishlist-btn" aria-valuetext="wishlist">my Wishlist</p>
                    </div>
                </div>

                <div className="profile-right">
                    <div className="wishlist ">
                        <WishCard amount={10} />
                        <WishCard amount={0} />
                        <WishCard amount={12} />
                        <WishCard amount={5} />
                        <WishCard amount={3} />
                    </div>
                    <div className="change-password ">
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
                    </div>
                    <div className="change-name ">
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
                    </div>
                    <div className="change-address ">
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
                    </div>
                    <div className="change-email ">
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
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default MyProfile