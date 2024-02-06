import { Piece } from "./Piece";

export class Pawn extends Piece {
    isWhite: boolean;
    position: { x: number; y: number };

    getPossibleMoves(board) {
        let moves = [];
        let direction = this.isWhite === true ? -1 : 1;
        let startRow = this.isWhite === true ? 6 : 1;
        let forwardOne = { x: this.position.x, y: this.position.y + direction } as { x: number; y: number };

        if (board.isEmpty(forwardOne)) {
            moves.push(forwardOne);

            if (this.position.y === startRow) {
                let forwardTwo = { x: this.position.x, y: this.position.y + 2 * direction } as { x: number; y: number };
                if (board.isEmpty(forwardTwo)) {
                    moves.push(forwardTwo);
                }
            }
        }

        let diagonals = [
            { x: this.position.x - 1, y: this.position.y + direction } as { x: number; y: number },
            { x: this.position.x + 1, y: this.position.y + direction } as { x: number; y: number }
        ];
        diagonals.forEach(diag => {
            if (board.isOpponentPiece(diag, this.isWhite)) {
                moves.push(diag);
            }
        });

        return moves;
    }
}
