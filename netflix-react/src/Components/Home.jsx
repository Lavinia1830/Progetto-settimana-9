import Gallery from "./Gallery";
import Header from "./Header";

const Home = () => {
    return (
        <div className="px-0">
            <Header/>
            <Gallery movie="harry potter" />
            <Gallery movie="matrix" />
            <Gallery movie="fantozzi" />
        </div>
    )
}

export default Home;
