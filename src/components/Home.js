import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div className="home">
            <div className="home-text">
                <h1 className="home-title">Love that crackle...?</h1>
                <div className="home-desc">Vintage vinyls welcomes enthusiasts that love the quaint feel that only vinyls can provide.</div>
                <Link to="/shop">
                    <button className="button-50" role="button">Go to shop</button>
                </Link>
            </div>
            <iframe src="https://giphy.com/embed/4DycqScoP9EBZgE4a6" width="500" height="500" frameBorder="0" className="giphy-embed" allowFullScreen/>
        </div>
    )
}

export default Home