import { Link } from "react-router-dom";
const Item = ({uid, image, name, price}) => {
    return (
        <Link to={name} state = {{uid: uid, image: image, name: name, price: price}}>
            <div className="item-card">
                <div className="item-picture-box">
                <img className="item-picture" src={image}/>
                </div>
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