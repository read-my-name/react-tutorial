import React, {Component} from "react";

class ClassClick extends Component{
    clickHandler() {
        console.log('Button Clicked ClassClick')
    }

    render() {
        return (
            <div>
                <button onClick = {this.clickHandler}>Click Me 'ClassClick'</button>
            </div>
        )
    }
}

export default ClassClick