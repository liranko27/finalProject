import React from 'react'
import logo from './images/logo.png'
import './style.css'
import './singleProduct.css'
function Navbar() {
  return (
           <header>
        <nav className="navbar">
            <div className="nav-left">
                <img className='nav-logo' src={logo} alt="logo"/>
                <ul className="links">
                    <li><a href="/">about</a>
                    </li>
                    <li><a className="profile-btn" href="/">profile</a>
                        <div className="profile-menu hidden">
                            <h3 style={{textDecoration:"underline"}}>My Profile</h3>
                            <p className="myAccount-btn">My Account</p>
                            <ul className="myAccount-list hidden">
                                <li>Change password</li>
                                <li>Change name</li>
                                <li>Change address</li>
                                <li>Change email</li>
                            </ul>

                            <div>
                                <a href="/">my Wishlist</a>
                            </div>

                        </div>
                    </li>
                    <div>
                        <li><a className="signin" href="/">sign in</a>

                            <div id="loginform" className="login-form hidden">
                                <div className="login">
                                    <h4>Sign in</h4>
                                    <form>
                                        <div>
                                            <label for="username">Username</label>
                                            <input type="text" name="username"/>
                                        </div>
                                        <div>
                                            <label for="password">Password</label>
                                            <input type="password" name="password"/>
                                        </div>

                                        <input type="submit" value="Submit!"/>
                                    </form>
                                </div>
                            </div>
                        </li>

                    </div>

                </ul>
            </div>
            <div className="nav-right">
                <div className="cart hidden">cart <span className="cart_amount">2</span>
                    <div className="cart-menu ">
                        <h1>cart</h1>
                        <section className="cart-products">
                            <div className="cart-product">
                                <div className="cart-img">image cap</div>
                                <div className="cart-btns">
                                    <p>Product name</p>
                                    <div>
                                        <i className="fas fa-trash-alt"></i>
                                        <input type="number"/>
                                    </div>
                                </div>
                                <div>
                                    <p>Price 10$</p>
                                </div>
                            </div>
                            <div className="cart-product">
                                <div className="cart-img">image cap</div>
                                <div className="cart-btns">
                                    <p>Product name</p>
                                    <div>
                                        <i className="fa-solid fa-trash-can"></i>
                                        <input type="number"/>
                                    </div>
                                </div>
                                <div>
                                    <p>Price 10$</p>
                                </div>
                            </div>
                            <div className="cart-product">
                                <div className="cart-img">image cap</div>
                                <div className="cart-btns">
                                    <p>Product name</p>
                                    <div>
                                        <i className="fa-solid fa-trash-can"></i>
                                        <input type="number"/>
                                    </div>
                                </div>
                                <div>
                                    <p>Price 10$</p>
                                </div>
                            </div>
                            <div className="cart-product">
                                <div className="cart-img">image cap</div>
                                <div className="cart-btns">
                                    <p>Product name</p>
                                    <div>
                                        <i className="fa-solid fa-trash-can"></i>
                                        <input type="number"/>
                                    </div>
                                </div>
                                <div>
                                    <p>Price 10$</p>
                                </div>
                            </div>
                            <div className="cart-product">
                                <div className="cart-img">image cap</div>
                                <div className="cart-btns">
                                    <p>Product name</p>
                                    <div>
                                        <i className="fa-solid fa-trash-can"></i>
                                        <input type="number"/>
                                    </div>
                                </div>
                                <div>
                                    <p>Price 10$</p>
                                </div>
                            </div>
                        </section>
                        <div className="cart-clear">
                            <button>Clear all products</button>
                            <button>Pay</button>
                            <p>Total price: 150$</p>
                        </div>

                    </div>
                </div>
                <div>
                    <input type="text" className="search"/>
                    <button className="search-btn">search</button>
                </div>
                <div className="hamburger-btn">
                    <div className="hamburger-menu hidden">
                        <h1>Menu</h1>
                    </div>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Navbar