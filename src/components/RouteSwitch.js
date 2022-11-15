import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Layout from "./ Layout";
import Home from "./Home";
import Shop from "./Shop";
import ShoppingCart from "./ShoppingCart";
import ItemPage from "./ItemPage";
import vinyls from "../vinyls"
import { isCompositeComponent } from "react-dom/test-utils";
const RouteSwitch = () => {
    const [shopItems, setShopItems] = useState(vinyls);
    const [isCartOpen, setCartState] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const toggleCartState = () => {
        setCartState(prevCartState => {
            return !prevCartState
        })
    };

    const addToCart = (itemDetails, quantity) => {
        const {uid, image, name, price} = itemDetails;
        setCartItems(prevCartItems => {
            const isInCart = prevCartItems.some(item => uid == item.uid);
            if (isInCart) {
                const newCartItems = prevCartItems.map(item => {
                    if (item.uid == uid) {
                        return {...item, quantity: item.quantity+quantity}
                    } else{
                        return item;
                    }
                })
                return newCartItems;
            } else {
                const newCartItems = prevCartItems.concat({
                    uid: uid,
                    image: image,
                    name: name,
                    price: price,
                    quantity: quantity
                })
                return newCartItems;
            }
        }
    )
        toggleCartState();
    }

    const changeCartItemQuantity = (uid, quantity) => {
        console.log("triggered");
        setCartItems(prevCartItems => {
            if (quantity == 0) {
                console.log(prevCartItems.filter(item => item.uid != uid))
                return prevCartItems.filter(item => item.uid != uid)
            } else {
                return prevCartItems.map(item => {
                if (item.uid == uid) {
                    return {
                        ...item,
                        quantity: quantity
                    }
                } else {
                    return item;
                }
            })}
        })
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout toggleCartState = {toggleCartState} cartItems = {cartItems} isCartOpen = {isCartOpen} changeCartItemQuantity= {changeCartItemQuantity}/>}>
                    <Route index element={<Home/>}/>
                    <Route path="shop">
                        <Route index element={<Shop shopItems = {shopItems}/>}/>
                        <Route path=":vinylName" element={<ItemPage addToCart = {addToCart}/>}/>
                    </Route>
                </Route>
            </Routes>
        
        </BrowserRouter>
    )
}

export default RouteSwitch