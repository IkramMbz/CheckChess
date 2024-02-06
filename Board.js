export class Board {
    constructor() {
        this.grid = this.initializeGrid();
    }

    initializeGrid() {
        // Création d'une grille 8x8 remplie de null pour représenter un plateau vide
        let grid = [];
        for (let i = 0; i < 8; i++) {
            grid.push(new Array(8).fill(null));
        }
        return grid;
    }

    placePiece(piece, position) {
        if (position && this.isPositionValid(position)) {
            this.grid[position.y][position.x] = piece;
        } else {
            console.error('Position invalide ou non fournie');
        }
    }
    

    movePiece(from, to) {
        if (this.isPositionValid(from) && this.isPositionValid(to) && !this.isEmpty(from)) {
            const piece = this.grid[from.y][from.x];
            this.grid[to.y][to.x] = piece; // Déplace la pièce
            this.grid[from.y][from.x] = null; // Vide l'ancienne position
        }
    }
    

    getPieceAt(position) {
        // Retourne la pièce à la position spécifiée
        if (this.isPositionValid(position)) {
            return this.grid[position.y][position.x];
        }
        return null;
    }

    isPositionValid(position) {
        // Vérifie si une position est valide sur le plateau
        return position.x >= 0 && position.x < 8 && position.y >= 0 && position.y < 8;
    }

    isEmpty(position) {
        // Vérifie si la position spécifiée est valide et si elle est vide
        if (this.isPositionValid(position)) {
            return this.grid[position.y][position.x] === null;
        }
        return false; // Retourne false si la position n'est pas valide
    }
    
}
