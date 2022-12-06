import React, { Component } from "react";

class EventBind extends Component{
    constructor(props) {
        super(props)

        this.state = {
            message:'Hello'
        }
        // approach #3
        this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler() {
    //     this.setState({message:'Goodbye using #3!'})
    //     console.log(this)
    // }

    clickHandler = () => {
        this.setState({message:'Goodbye using #4!'})
        console.log(this)
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>click Event Bind</button> */}
                {/* <button onClick={()=> this.clickHandler()}>click Event Bind better in passing parameter</button> */}
                {/* if initialise this.clickHandler = this.clickHandler.bind(this) */}
                <button onClick={this.clickHandler}>click Event Bind</button>
            </div>
        )
    }
}

export default EventBind