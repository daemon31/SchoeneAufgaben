import React from 'react';
import likeButton from "./LikeButton";

class UnlikeButton extends React.Component{
    constructor(props) {
        super(props);
         this.state = {
             liked : false
        }

    }

    render = () => {
        if (this.state.liked) {
            return (
                <div>
                    <p>Dir gefällt das nicht mehr.</p>
                </div>
            );
        }
        return (
            <div>
                <button onClick={() => this.setState({ liked: true }) }>
                    Gefällt mir nicht mehr
                </button>
                <p></p>
            </div>

        );
    }
}

export default UnlikeButton