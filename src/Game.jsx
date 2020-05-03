
import React from "react";
import GameState from "./GameState";
import Board from "./Board";
import Button from 'react-bootstrap/Button';

class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            gameState: new GameState(20, 10)
        };
    }

    render() {
        return (<>
            <Board gameState={this.state.gameState} />
            <br /><br /><br /><br /><br />
            <Button onClick={e => this.step()}>Schritt</Button>
        </>);
    }

    step() {
        this.setState({
            gameState: this.state.gameState.walkStep(1, 0),
        });
    }

}

export default Game;
