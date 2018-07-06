import React, { Component } from 'react';

class Gif extends Component {
    constructor(props){
        super(props)
        this.state = {
            clicked: false
        }
        this.renderStill = this.renderStill.bind(this)
        this.renderMoving = this.renderMoving.bind(this)
        this.handleClick = this.handleClick.bind(this)

    }

    handleClick(){
        this.setState({
            clicked: !this.state.clicked
        })
    }

    renderStill(){
        return(
            <div style={{minWidth: "350px", minHeight: "350px"}}>
                <h4>Rating: {this.props.rating.toUpperCase()}</h4>
                <h3 style={{color: "red"}}>Off</h3>
                <img style={{maxWidth: "300px", maxHeight: "300px"}} alt="gif" src={this.props.still} onClick={this.handleClick}/>
            </div>
        )
    }
    renderMoving(){
        return(
            <div style={{minWidth: "350px", minHeight: "350px"}}>
                <h4>Rating: {this.props.rating.toUpperCase()}</h4>
                <h3 style={{color: "green"}}>On</h3>
                <img style={{maxWidth: "300px", maxHeight: "300px"}} alt="gif" src={this.props.moving} onClick={this.handleClick}/>
            </div>
        )
    }

    render() {
        return (
            <div>
                <div>
                    {(this.state.clicked ? this.renderMoving() : this.renderStill())}
                </div>
            </div>
        );
    }
}

export default Gif;