import {Link, Outlet } from "react-router-dom";
import { useState } from "react";
import ShoppingCartIcon from "../images/shopping-cart.png";
import ShoppingCart from "./ShoppingCart";

const Layout = () => {
    const [isCartOpen, setCartState] = useState(false);
    const [cartItems, setCartItems] = useState({});

    const toggleCartState = () => {
        setCartState(prevCartState => {
            return !prevCartState
        })
    };

    return (
        <div>
            <header>
                <Link to="/" className="site-title">Vintage Vinyls</Link>
                <nav className="header-nav">
                    <Link to="/shop">Shop</Link>
                    <img onClick={toggleCartState} className="shopping-cart-logo" src={ShoppingCartIcon}/>
                </nav>
            </header>
            <Outlet/>
            {
                isCartOpen 
                ? <ShoppingCart cartItems = {cartItems} toggleCartState = {toggleCartState}/>
                : ''
            }

        </div>
    )
}

export default Layout