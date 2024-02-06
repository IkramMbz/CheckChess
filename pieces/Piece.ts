export class Piece {
    color: any;
    position: any;

    constructor(color, position) {
        this.color = color; // 'White' ou 'Black'
        this.position = position; // {x: col, y: row} où col et row sont des nombres de 0 à 7
    }

    // Méthode à surcharger par les sous-classes
    getPossibleMoves(board) {
        return [];
    }
}
