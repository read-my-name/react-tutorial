import React, { Component } from "react";

class EventBind extends Component{
    constructor(props) {
        super(props)

        this.state = {
            message:'Hello'
        }
    }

    clickHandler() {
        this.setState({message:'Goodbye!'})
        console.log(this)
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>click Event Bind</button> */}
                <button onClick={()=> this.clickHandler()}>click Event Bind</button>
            </div>
        )
    }
}

export default EventBind