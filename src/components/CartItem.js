import { QuantityPicker } from "react-qty-picker";
const CartItem = ({uid, image, name, price, quantity, changeCartItemQuantity}) => {
    return (
        <div className="cart-item">
            <div className="cart-item-image-box">
                <img className="cart-item-image" src={image}/>
            </div>
            <div>             
                <div>{name}</div>
                <div>${price}</div>
            </div>
            <QuantityPicker min={0} onChange={value => {changeCartItemQuantity(uid, value)}} value={quantity} smooth></QuantityPicker>
        </div>
    )

}

export default CartItem;