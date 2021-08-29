class TicTacToe {
    currentSymbol  = 'x';

    winner = null;

    gameField = [[null, null, null], [null, null, null], [null, null, null]];

    constructor() {

    }
    
    getCurrentPlayerSymbol() {
        return this.currentSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.gameField[rowIndex][columnIndex]) {
            return;
        }

        this.gameField[rowIndex][columnIndex] = this.currentSymbol;

        if (((this.gameField[0][0] === this.gameField[0][1]) && (this.gameField[0][0] === this.gameField[0][2]) && this.gameField[0][0]) ||
        ((this.gameField[1][0] === this.gameField[1][1]) && (this.gameField[1][0] === this.gameField[1][2]) && this.gameField[1][0]) ||
        ((this.gameField[2][0] === this.gameField[2][1]) && (this.gameField[2][0] === this.gameField[2][2]) && this.gameField[2][0]) ||
        ((this.gameField[0][0] === this.gameField[1][0]) && (this.gameField[0][0] === this.gameField[2][0]) && this.gameField[0][0]) ||
        ((this.gameField[0][1] === this.gameField[1][1]) && (this.gameField[0][1] === this.gameField[2][1]) && this.gameField[0][1]) ||
        ((this.gameField[0][2] === this.gameField[1][2]) && (this.gameField[0][2] === this.gameField[2][2]) && this.gameField[0][2]) ||
        ((this.gameField[0][0] === this.gameField[1][1]) && (this.gameField[0][0] === this.gameField[2][2]) && this.gameField[0][0]) ||
        ((this.gameField[0][2] === this.gameField[1][1]) && (this.gameField[0][2] === this.gameField[2][0]) && this.gameField[0][2])) {
            this.winner = this.currentSymbol;
        }
        console.log(this.gameField);
        this.currentSymbol = this.currentSymbol == 'x' ? 'o' : 'x';
         
    }

    isFinished() {
        if (this.getWinner() || this.noMoreTurns()) {
        return true;
        } else return false;
    }

    getWinner() { 
        return this.winner;
    }

    noMoreTurns() {
        for (let i = 0; i < this.gameField.length; i++) {
            for (let j = 0; j < this.gameField[i].length; j++) {
                if (!this.gameField[i][j]) {
                    return false;
                }
            }
        }

        return true;
    }

    isDraw() {
       // return this.noMoreTurns() || !this.winner;
       return this.noMoreTurns() && !this.getWinner();
       
        
    }
    
    getFieldValue(rowIndex, colIndex) {
        if (this.gameField[rowIndex][colIndex]) {
        return this.gameField[rowIndex][colIndex];
        } else return null;
    }
}

module.exports = TicTacToe;
