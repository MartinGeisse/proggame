
import React from "react";

export default class Board extends React.Component {

    render() {
        var rows = [];
        for (var y = 0; y < this.props.gameState.height; y++) {
            var cells = [];
            for (var x = 0; x < this.props.gameState.width; x++) {
                if (x === this.props.gameState.playerX && y === this.props.gameState.playerY) {
                    let className = this.props.gameState.playerFacingLeft ? "playerLeft" : "playerRight";
                    cells.push(<td className={className}></td>);
                } else {
                    cells.push(<td></td>);
                }
            }
            rows.push(<tr>{cells}</tr>);
        }
        return (<table className="board">{rows}</table>);
    }

}
