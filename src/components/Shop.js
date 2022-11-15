import Item from "./Item"
import ChanelOrange from "../images/chanel-orange.jpeg"
import {useOutletContext} from "react-router-dom";


const Shop = ({shopItems}) => {

    const itemDivs = []

    shopItems.forEach(item => {
        const {uid, image, name, price} = item;
        itemDivs.push(<Item key = {uid} uid = {uid} image = {image} name = {name} price = {price}/>);
    })

    return (
        <div className="shop">
            <div className="shop-title">
                Our Collection
            </div>
            <div className="shop-items">
                {itemDivs}
            </div>
        </div>
    )
}

export default Shop
