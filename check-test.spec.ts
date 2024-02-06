import { describe, expect, it } from 'vitest'

type Movie = { title: string; year: number; };
type Movies = Movie[];
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

  const pieces: ChessPiece[] = [
    initPiece("Roi", true, "K", 1, { letter: "A", number: 1 }),
    initPiece("Tour", false, "R", 2, { letter: "A", number: 3 }),
    initPiece("Fou", true, "B", 3, { letter: "A", number: 4 }),
    initPiece("Cavalier", false, "N", 4, { letter: "A", number: 5 }),
    initPiece("Pion", true, "P", 5, { letter: "B", number: 1 })
  ];

  console.log(pieces[0])
});