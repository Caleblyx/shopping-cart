import ShoppingCartIcon from "../images/shopping-cart.png";

const ShoppingCartButton = ({toggleCartState, cartItems}) => {
    
    const cartLength = cartItems.reduce( 
        (total, item) => total + item.quantity,
        0
    )

    const isCartEmpty = cartLength == 0;

    return (
        <div className="sc-button">
            <img onClick={toggleCartState} className="shopping-cart-logo" src={ShoppingCartIcon}/>
            {
                isCartEmpty
                ? <div className = "sc-button-count-empty"/>
                : <div className="sc-button-count">{cartLength}</div>
            }

        </div>
    )
}

export default ShoppingCartButton;