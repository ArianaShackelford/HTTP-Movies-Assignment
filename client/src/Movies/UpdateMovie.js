import React, {Component} from 'react';

export default class UpdateMovie extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            movie: {
                title: '',
                director: '',
                metascore: '',
                stars: []
            }
        };
    }


    handleChange = event => {
        this.setState({
            movie: {
                ...this.state.movie,
                [event.target.name]: event.target.value
            }
        })
    }

    render() {
        return(
            <div>
                <h2>Update Movie</h2>
                <form>
                    <input
                        type='text'
                        name='title'
                        placeholder='title'
                        onChange={this.handleChange}
                        value={this.state.movie.title} />
                    <input
                        type='text'
                        name='director'
                        placeholder='director'
                        onChange={this.handleChange}
                        value={this.state.movie.director} />
                    <input
                        type='text'
                        name='metascore'
                        placeholder='metascore'
                        onChange={this.handleChange}
                        value={this.state.movie.metascore} />
                    <input
                        type='text'
                        name='stars'
                        placeholder='stars'
                        onChange={this.handleChange}
                        value={this.state.movie.stars} />
                    <button type='submit'>Update Movie</button>
                </form>
            </div>
        )
    }
}

