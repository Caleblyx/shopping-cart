import { useState, useEffect } from "react";
import { render } from "@testing-library/react";
import { createPortal } from "react-dom";

const Modal = ({children, className="modal", el = 'div'}) => {
    const [container] = useState(() => {
        // This will be executed only on the initial render
        // https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
        return document.createElement(el);
      });
    useEffect(() => {
        container.classList.add(className);
        document.body.appendChild(container);
        return () => {
            document.body.removeChild(container);
        }
    })

    return createPortal(children, container);
}

const ShoppingCart = ({toggleCartState}) => {

    return (
        <Modal>
            <div className="shopping-cart">
                <div onClick={toggleCartState} className = "x-icon"> X </div>
                <div className="cart-title">Your Cart</div>
            </div>
        </Modal>
    )   
}

export default ShoppingCart