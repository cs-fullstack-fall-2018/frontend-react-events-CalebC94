import React, {Component} from 'react'

class ScoreKeeper extends Component {
    constructor(props) {
        super(props);
        this.state = {scoreKeep: this.props.scoreKeep}
    }

    buttonClick = () => {
        this.setState(
            {
                scoreKeep: this.state.scoreKeep+1
            }
        )
    };

    render() {
        return (
            <div>
                <h1>Score: <span>{this.state.scoreKeep}</span></h1>
                <button onClick={this.buttonClick}>Enter</button>
            </div>
        );
    }
}

export default ScoreKeeper;