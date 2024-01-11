import { Component } from 'react';
import { Container, Alert, Spinner, Row } from 'react-bootstrap';
import SingleMovie from './SingleMovie'
    
class Gallery extends Component {

    state = {
        movies: [],
        isLoading: true,
        isError: false,
    }

    movieUrl = 'http://www.omdbapi.com/?apikey=4e11b69c&s=';
    movieQuery = this.props.movie;

    getMovies = async () => {
        try {
            let respose = await fetch(this.movieUrl + this.movieQuery)
            if (respose.ok) {
                let data = await respose.json();
                console.log('Ho trovato:', data);
                let foundMovies = data.Search;
                console.log('Film trovati:', foundMovies);
                this.setState({
                    ...this.state,
                    movies: foundMovies,
                    isLoading: false,
                })


            }
            else {
                this.setState({
                    isLoading: false,
                    isError: true,
                })
                return new Error('Errore nella richiesta', respose.status);
            }

        }
        catch (err) {
            this.setState({
                isLoading: false,
                isError: true,
            })
            console.log('Errore nella richiesta:', err);
        }
    }


    componentDidMount() {
        this.getMovies()
    }

    render() {
        return (
            <Container className="my-5 py-0">
                <h3 className="mb-3">Results for: {this.props.movie.toLowerCase()}</h3>
                {this.state.isError && (
                    <Alert variant="danger">Errore nella chiamata!</Alert>
                )}
                {this.state.isLoading && (
                    <div className="text-center">
                        <Spinner animation="border" role="status" variant="danger">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
                )}
                <Row xs={2} md={3} lg={6}>
                    {
                        this.state.movies.slice(0, 6).map(movie => {
                            return <SingleMovie key={movie.imdbID} movie={movie} />
                        })
                    }

                </Row>
            </Container>
        )
    }
}

export default Gallery;