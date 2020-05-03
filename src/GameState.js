
function clamp(value, min, max) {
    return value < min ? min : value > max ? max : value;
}

class GameState {

    // var width, height;
    // var playerX, playerY;
    // var playerFacingLeft;

    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.playerX = 0;
        this.playerY = 0;
        this.playerFacingLeft = false;
    }

    clone() {
        return Object.assign(new GameState(this.width, this.height), this);
    }

    patch(fields) {
        return Object.assign(this.clone(), fields);
    }

    walkStep(dx, dy) {
        return this.patch({
            playerX: clamp(this.playerX + dx, 0, this.width - 1),
            playerY: clamp(this.playerY + dy, 0, this.height - 1),
        });
    }

}

export default GameState;
