import { describe, expect, it } from 'vitest'

type Position = {
  x: number;
  y: number;
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
  initPiece("Roi", true, "K", 1, { x: 1, y: 1 }),
  initPiece("Tour", true, "R", 2, { x: 1, y: 3 }),
  initPiece("Fou", true, "B", 3, { x: 1, y: 4 }),
  initPiece("Cavalier", true, "N", 4, { x: 1, y: 5 }),
  initPiece("Pion", true, "P", 5, { x: 2, y: 1 })
];

const blackPieces: ChessPiece[] = [
  initPiece("Roi", false, "K", 1, { x: 1, y: 1 }),
  initPiece("Tour", false, "R", 2, { x: 1, y: 3 }),
  initPiece("Fou", false, "B", 3, { x: 1, y: 4 }),
  initPiece("Cavalier", false, "N", 4, { x:1, y: 5 }),
  initPiece("Pion", false, "P", 7, { x: 9, y: 1 })
];

describe('Test moves', () => {
  const e: ChessPiece = initPiece("Roi", true, "K", 1, { x:1, y: 1 });

  it(`The piece shoold exist first`, () => {
    const pieceCanMove = pieceExist(1, whitePieces);
    expect(pieceCanMove).toStrictEqual(true);
  });

  it(`The piece position should not be correct`, () => {
    const piecePosition = testPiecePosition(7, false);
    expect(piecePosition).toStrictEqual(false);
  });
});

const pieceExist = (pieceId: number, pieces: ChessPiece[]): boolean => {
  return pieces.some(piece => piece.pieceId === pieceId);
};

const testPiecePosition = (pieceId: number, isWhitePlayer: boolean): boolean => {
  const pieces = isWhitePlayer ? whitePieces : blackPieces;
  const piece = pieces.find(piece => piece.pieceId === pieceId);

  return !!piece && (
    piece.position.x >= 1 && piece.position.x <= 8 &&
    piece.position.y >= 1 && piece.position.y <= 8
  );
};

const movePiece = (y: number, x: number, pieceId: number, isWhitePlayer: boolean) => {
  const pieces = isWhitePlayer ? whitePieces : blackPieces;
  
  //Icis
  // pieces.filter(piece => piece.pieceId === pieceId).forEach(piece => console.log(piece));
  // return true;
    
};

