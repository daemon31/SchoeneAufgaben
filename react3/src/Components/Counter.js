import React from 'react';

class Counter extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            counter : 0
        }

    }

    increaseCounter = () => {
        this.setState ( {counter : this.state.counter +1} )

        console.log("counter: ", this.state.counter);
    };

    render = () => {
        return (
            <div>
                <button onClick={this.increaseCounter}>Like Counter</button>
                <div>Peter hat: {this.state.counter} Likes</div>
            </div>
        );
    }
}

export default Counter