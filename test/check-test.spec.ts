import { describe, expect, it } from 'vitest'

type Position = {
  letter: string;
  number: number;
};

type ChessPiece = {
  name: string;
  isWhite: boolean;
  pieceCode: string;
  pieceId: number;
  position: Position;
};

const initPiece = (pieceName: string, pieceIsWhite: boolean, pieceCode: string, pieceId: number, position: Position): ChessPiece => {
  return {
    name: pieceName,
    isWhite: pieceIsWhite,
    pieceCode: pieceCode,
    pieceId: pieceId,
    position: position
  };
};

describe('Test moves', () => {
  const e: ChessPiece = initPiece("Roi", true, "K", 1, { letter: "A", number: 1 });

  const whitePieces: ChessPiece[] = [
    initPiece("Roi", true, "K", 1, { letter: "A", number: 1 }),
    initPiece("Tour", true, "R", 2, { letter: "A", number: 3 }),
    initPiece("Fou", true, "B", 3, { letter: "A", number: 4 }),
    initPiece("Cavalier", true, "N", 4, { letter: "A", number: 5 }),
    initPiece("Pion", true, "P", 5, { letter: "B", number: 1 })
  ];

  const blackPieces: ChessPiece[] = [
    initPiece("Roi", false, "K", 1, { letter: "A", number: 1 }),
    initPiece("Tour", false, "R", 2, { letter: "A", number: 3 }),
    initPiece("Fou", false, "B", 3, { letter: "A", number: 4 }),
    initPiece("Cavalier", false, "N", 4, { letter: "A", number: 5 }),
    initPiece("Pion", false, "P", 5, { letter: "B", number: 1 })
  ];

  it(`Test moov`, () => {
    
  });
});

const testMove = (x, y, piece) => {

}

