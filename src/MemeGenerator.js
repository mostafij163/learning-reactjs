import React, { Component } from 'react'
import Header from './Header'

class MemeGenerator extends Component{
    constructor() {
        super()
        this.state = {
            toptext: '',
            bottomtext: '',
            randomimg: '',
            allimg: []
        }
        this.handleChange = this.handleChange.bind(this)
    }
    componentDidMount() {
        fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json())
        .then(response => {
            const { memes } = response.data
            this.setState({ allimg: memes})
        })
    }
    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value.toString()
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const randomnum = Math.floor(Math.random() * this.state.allimg.length)
        const randomimage = this.state.allimg[randomnum].url
        this.setState({ randomimg: randomimage })
    }

    render(){
        return(
            <div className="meme">
                <Header />
                <form onSubmit = {this.handleSubmit} >
                    <input type="text" name="toptext" value={ this.state.toptext } onChange={ this.handleChange } />
                    <input type="text" name="bottomtext" value={this.state.bottomtext} onChange={ this.handleChange } />
                    <button style={{ backgroundColor: '#333', padding: '5px', color: '#fff' }} >Generete</button>
                </form>
                <div className="imagesection">
                    <h2 style={{ color: 'black' }} >{ this.state.toptext }</h2>
                    <img src={ this.state.randomimg } alt=""/>
                    <h2 style={{ color:'black' }} >{ this.state.bottomtext}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator