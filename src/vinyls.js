import ChanelOrange from "./images/chanel-orange.jpeg";
import AbbeyRoad from "./images/abbey-road.jpg";
import Currents from "./images/currents.jpeg";
import OkComputer from "./images/ok-computer.jpeg";
import RoomOnFire from "./images/room-on-fire.jpeg";
import WishYouWereHere from "./images/wish-you-were-here.jpg";
import Kauai from "./images/kauai.jpeg"
import DarkSideOfTheMoon from "./images/dark-side-of-the-moon.jpg"
import AM from "./images/am.webp"
import HatfulofHollow from './images/hatful-of-hollow.webp'
import uniqid from "uniqid";


const vinyls = [
    {
        uid: uniqid(), 
        image: ChanelOrange,
        name: "Chanel Orange - Frank Ocean",
        price: 49.99
    },
    {
        uid: uniqid(), 
        image: RoomOnFire,
        name: "Room On Fire - The Strokes",
        price: 39.99
    },
    {
        uid: uniqid(), 
        image: Kauai,
        name: "Kauai - Childish Gambino",
        price: 89.99
    },
    {
        uid: uniqid(), 
        image: Currents,
        name: "Currents - Tame Imapala",
        price: 89.99
    },
    {
        uid: uniqid(), 
        image: AbbeyRoad,
        name: "Abbey Road - The Beatles",
        price: 89.99
    },
    {
        uid: uniqid(),
        image: OkComputer,
        name: "Ok Computer - Radiohead",
        price: 49.99
    },
    {
        uid: uniqid(),
        image: WishYouWereHere,
        name: "Wish You Were Here - Pink Floyd",
        price: 79.99
    },
    {
        uid: uniqid(),
        image: DarkSideOfTheMoon,
        name: "Dark Side of the Moon - Pink Floyd",
        price: 129.99
    },
    {
        uid: uniqid(),
        image: AM,
        name: "AM - Arctic Monkeys",
        price: 79.99
    },
    {
        uid: uniqid(),
        image: HatfulofHollow,
        name: "Hatful of Hollow - The Smiths",
        price: 69.99
    }
]

export default vinyls