import Item from "./Item"
import ChanelOrange from "../images/chanel-orange.jpeg"


const Shop = () => {
    return (
        <div className="shop">
            <div className="shop-title">
                Our Collection
            </div>
            <div className="shop-items">
                <Item picture={ChanelOrange} name="Chanel Orange - Frank Ocean" price={100}/>
            </div>
        </div>
    )
}

export default Shop
