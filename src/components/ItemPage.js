import { useState } from "react";
import {useLocation } from "react-router-dom";
import { QuantityPicker } from "react-qty-picker";

const ItemPage = ({addToCart}) => {

    const [quantity, setQuantity] = useState(1);

    const props = useLocation();
    const {uid, image, name, price} = props.state;


    return (
        <div className="item-page">
            <div className="item-page-picture-box">
                <img className="item-page-picture" src={image}/>
            </div>
            <div className="item-page-desc">
                <div className="item-page-name">{name}</div>
                <div className="item-page-price">${price.toFixed(2)}</div>
                <div className="item-page-add">
                    <QuantityPicker min={1} max={10} onChange = {(value) => {setQuantity(value)}} smooth value={quantity}/>
                    <button onClick = {(e) => {addToCart(props.state, quantity)}}className="button-40">Add to cart</button>
                </div>

            </div>
        </div>
    )
}

export default ItemPage;