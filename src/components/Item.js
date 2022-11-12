import { Link } from "react-router-dom";
const Item = ({picture, name, price}) => {
    return (
        <Link to={name} state = {{ picture: picture, name: name, price: price}}>
            <div className="item-card">
                <img className="item-picture" src={picture}/>
                <div className="item-desc">
                    <div className="item-name">
                        {name}
                    </div>
                    <div className="item-price">
                        ${price.toFixed(2)}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Item;