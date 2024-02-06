export class Board {
    grid: (any | null)[][];

    constructor() {
        this.grid = this.initializeGrid();
    }

    initializeGrid(): (any | null)[][] {
        let grid: (any | null)[][] = [];
        for (let i = 0; i < 8; i++) {
            grid.push(new Array(8).fill(null));
        }
        return grid;
    }

    placePiece(piece: any, position: { x: number; y: number }): void {
        if (position && this.isPositionValid(position)) {
            this.grid[position.y][position.x] = piece;
        } else {
            console.error('Position invalide ou non fournie');
        }
    }
    
    movePiece(from: { x: number; y: number }, to: { x: number; y: number }): void {
        if (this.isPositionValid(from) && this.isPositionValid(to) && !this.isEmpty(from)) {
            const piece = this.grid[from.y][from.x];
            this.grid[to.y][to.x] = piece;
            this.grid[from.y][from.x] = null;
        }
    }

    getPieceAt(position: { x: number; y: number }): any | null {
        if (this.isPositionValid(position)) {
            return this.grid[position.y][position.x];
        }
        return null;
    }

    isPositionValid(position: { x: number; y: number }): boolean {
        return position.x >= 0 && position.x < 8 && position.y >= 0 && position.y < 8;
    }

    isEmpty(position: { x: number; y: number }): boolean {
        if (this.isPositionValid(position)) {
            return this.grid[position.y][position.x] === null;
        }
        return false;
    }
}