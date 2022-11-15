import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { CSSTransition } from "react-transition-group";

const Backdrop = ({isCartOpen}) => {
    return isCartOpen ? (
        <div className="backdrop"></div>
      ) : null;
  };

const ShoppingCart = ({isCartOpen, cartItems, toggleCartState, changeCartItemQuantity}) => {
    
    const cartItemEls = []

    cartItems.forEach(item => {
        const {uid, image, name, price, quantity} = item
        cartItemEls.push(
            <CartItem uid={uid} image={image} name={name} price={price} quantity={quantity} changeCartItemQuantity={changeCartItemQuantity}/>
        )
    })

    const isCartEmpty = cartItems.length == 0;

    const cartTotal = cartItems.reduce(
        (total, item) => total + (item.price * item.quantity),
        0
    )

    return (
        <div>
        <Backdrop isCartOpen={isCartOpen}></Backdrop>
        <CSSTransition
                in={isCartOpen}
                timeout={1500}
                classNames="dialog"
                mountOnEnter
                unmountOnExit
                appear={true}
        >
                <div className="shopping-cart">
                    <div onClick={toggleCartState} className = "x-icon"> X </div>
                    <div className="cart-title">Your Cart</div>
                    {
                        isCartEmpty
                        ? 
                        <div className="empty-cart"> 
                            Your cart is empty
                            <Link to={'/shop'}>
                                <button className="button-40" onClick = {e => toggleCartState()} role="button">Go to shop</button>
                            </Link> 
                        </div>
                        : <div className="filled-cart">
                            <div className="cart-items">{cartItemEls}</div>
                            <div className="cart-total">Total: ${cartTotal.toFixed(2)}</div>
                        </div>
                    }
                </div>
        </CSSTransition>
        </div>
    )   
}

export default ShoppingCart