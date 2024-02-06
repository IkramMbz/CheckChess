import { Piece } from './Piece';

export class Pawn extends Piece {


    getPossibleMoves(board) {
        let moves = [];
        let direction = this.color === 'White' ? -1 : 1;
        let startRow = this.color === 'White' ? 6 : 1;
        let forwardOne = { x: this.position.x, y: this.position.y + direction };

        // Mouvement vers l'avant
        if (board.isEmpty(forwardOne)) {
            moves.push(forwardOne);
            
            // Mouvement initial de deux cases
            if (this.position.y === startRow) {
                let forwardTwo = { x: this.position.x, y: this.position.y + 2 * direction };
                if (board.isEmpty(forwardTwo)) {
                    moves.push(forwardTwo);
                }
            }
        }

        // Captures diagonales
        let diagonals = [{ x: this.position.x - 1, y: this.position.y + direction }, { x: this.position.x + 1, y: this.position.y + direction }];
        diagonals.forEach(diag => {
            if (board.isOpponentPiece(diag, this.color)) {
                moves.push(diag);
            }
        });

        return moves;
    }
}
