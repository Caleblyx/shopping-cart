import {Link, Outlet } from "react-router-dom";
import { useState, useRef } from "react";
import ShoppingCartIcon from "../images/shopping-cart.png";
import ShoppingCart from "./ShoppingCart";
import vinyls from "../vinyls"
import {CSSTransition} from "react-transition-group"
import ShoppingCartButton from "./ShoppingCartButton";

const Layout = ({toggleCartState, cartItems, isCartOpen, changeCartItemQuantity}) => {

    return (
        <div className="layout">
            <header>
                <Link to="/" className="site-title">Vintage Vinyls</Link>
                <nav className="header-nav">
                    <Link to="/shop">Shop</Link>
                    <ShoppingCartButton toggleCartState={toggleCartState} cartItems={cartItems}/>
                </nav>
            </header>
            <Outlet/>
            <ShoppingCart isCartOpen={isCartOpen} cartItems = {cartItems} toggleCartState = {toggleCartState} changeCartItemQuantity = {changeCartItemQuantity}/>
        </div>
    )
}

export default Layout