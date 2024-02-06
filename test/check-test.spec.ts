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

describe('Test moves', () => {
  const e: ChessPiece = initPiece("Roi", true, "K", 1, { letter: "A", number: 1 });

  it(`The piece shoold exist first`, () => {
    const pieceCanMove = pieceExist(1, whitePieces);
    expect(pieceCanMove).toStrictEqual(true);
  });

  it(`Test moov`, () => {
    const pieceCanMove = movePiece("A", 6, 1, true);
    expect(pieceCanMove).toStrictEqual(true);
  });


});

const pieceExist = (pieceId: number, pieces: ChessPiece[]): boolean => {
  return pieces.some(piece => piece.pieceId === pieceId);
};

const movePiece = (y: string, x: number, pieceId: number, isWhitePlayer: boolean) => {
  const pieces = isWhitePlayer ? whitePieces : blackPieces;
  
  //Icis
  // pieces.filter(piece => piece.pieceId === pieceId).forEach(piece => console.log(piece));
  // return true;
    
};

