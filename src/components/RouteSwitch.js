import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./ Layout";
import Home from "./Home";
import Shop from "./Shop";
import ShoppingCart from "./ShoppingCart";
import ItemPage from "./ItemPage";
const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="shop">
                        <Route index element={<Shop/>}/>
                        <Route path=":vinylName" element={<ItemPage/>}/>
                    </Route>
                    <Route path="shopping-cart" element={<ShoppingCart/>}/>        
                </Route>
            </Routes>
        
        </BrowserRouter>
    )
}

export default RouteSwitch