import {useLocation } from "react-router-dom";
import { QuantityPicker } from "react-qty-picker";

const ItemPage = () => {
    const props = useLocation();
    console.log(props);
    const {picture, name, price} = props.state;
    return (
        <div className="item-page">
            <img className="item-page-picture" src={picture}/>
            <div className="item-page-desc">
                <div className="item-page-name">{name}</div>
                <div className="item-page-price">${price.toFixed(2)}</div>
                <div className="item-page-add">
                    <QuantityPicker min={0} max={10} smooth/>
                    <button className="button-40">Add to cart</button>
                </div>

            </div>
        </div>
    )
}

export default ItemPage;