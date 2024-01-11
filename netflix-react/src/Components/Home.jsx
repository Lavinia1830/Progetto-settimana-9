import Gallery from "./Gallery";
import Header from "./Header";

const Home = () => {
    return (
        <>
            <Header/>
            <Gallery movie="harry potter" />
            <Gallery movie="matrix" />
            <Gallery movie="fantozzi" />
        </>
    )
}

export default Home;
