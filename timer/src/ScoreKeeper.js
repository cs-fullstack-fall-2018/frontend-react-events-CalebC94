import React, {Component} from 'react'

class ScoreKeeper extends Component {
    constructor(props) {
        super(props);
        this.state = {scoreKeep: this.props.score}
    }

    buttonClick = () => {
        this.setState(
            {
                score: this.state.scoreKeep+1
            }
        )
    };

    render() {
        return (
            <div>
                <h1>Template</h1>
                <button onClick={this.buttonClick}>Enter</button>
                <h2>points:</h2>
                <h2>{this.state.scoreKeep}</h2>
            </div>
        );
    }
}

export default ScoreKeeper;