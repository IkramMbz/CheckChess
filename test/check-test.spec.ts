import { describe, expect, it } from 'vitest'

type Position = {
  x: number;
  y: number;
};

type ChessPiece = {
  isWhite: boolean;
  pieceType: string;
  pieceId: number;
  position: Position;
};

const initPiece = (pieceType: string, pieceIsWhite: boolean, pieceId: number, position: Position): ChessPiece => {
  return {
    pieceType: pieceType,
    isWhite: pieceIsWhite,
    pieceId: pieceId,
    position: position
  };
};

// K => K
// Q pour la reine
// R pour la R
// B => B
// N => N
// P => P

const whitePieces: ChessPiece[] = [
  initPiece("K", true, 1, { x: 1, y: 1 }),
  initPiece("Q", true, 2, { x: 1, y: 3 }),
  initPiece("B", true, 3, { x: 1, y: 4 }),
  initPiece("N", true, 4, { x: 1, y: 5 }),
  initPiece("P", true, 5, { x: 2, y: 1 })
];

const blackPieces: ChessPiece[] = [
  initPiece("K", false, 1, { x: 1, y: 1 }),
  initPiece("R", false, 2, { x: 1, y: 3 }),
  initPiece("B", false, 3, { x: 1, y: 4 }),
  initPiece("N", false, 4, { x:1, y: 5 }),
  initPiece("P", false, 7, { x: 9, y: 1 })
];

describe('Test moves', () => {
  const e: ChessPiece = initPiece("K", true, 1, { x:1, y: 1 });

  it(`The piece shoold exist first`, () => {
    const pieceCanMove = pieceExist(1, whitePieces);
    expect(pieceCanMove).toStrictEqual(true);
  });

  it(`The piece position should not be correct`, () => {
    const testPiecePosition = piecePosition(7, false);
    expect(testPiecePosition).toStrictEqual(false);
  });

  it(`The piece movement should be valid`, () => {
    const kingPiece = initPiece("K", true, 1, { x: 1, y: 1 });
    const queenPiece = initPiece("Q", true, 1, { x: 1, y: 1 });
    const rookPiece = initPiece("R", true, 1, { x: 1, y: 1 });
    const bishopPiece = initPiece("B", true, 1, { x: 1, y: 1 });
    const knightPiece = initPiece("N", true, 1, { x: 1, y: 1 });
    const pawnPiece = initPiece("P", true, 1, { x: 1, y: 2 });

    const kingValidMovement = pieceMovement(kingPiece, 2, 1);
    const kingInvalidMovement = pieceMovement(kingPiece, 1, 3);

    const queenValidMovement = pieceMovement(queenPiece, 2, 2);
    const queenInvalidMovement = pieceMovement(queenPiece, 3, 4);

    const rookValidMovement = pieceMovement(rookPiece, 1, 5);
    const rookInvalidMovement = pieceMovement(rookPiece, 2, 5);

    const bishopValidMovement = pieceMovement(bishopPiece, 3, 3);
    const bishopInvalidMovement = pieceMovement(bishopPiece, 4, 5);

    const knightValidMovement = pieceMovement(knightPiece, 3, 2);
    const knightInvalidMovement = pieceMovement(knightPiece, 1, 3);

    const pawnValidMovement = pieceMovement(pawnPiece, 1, 3);
    const pawnInvalidMovement = pieceMovement(pawnPiece, 1, 4);

    const pawnValidDoubleMovement = pieceMovement(pawnPiece, 2, 1);
    const pawnInvalidDoubleMovement = pieceMovement(pawnPiece, 2, 1);

    expect(kingValidMovement).toStrictEqual(true);
    expect(queenValidMovement).toStrictEqual(true);
    expect(rookValidMovement).toStrictEqual(true);
    expect(bishopValidMovement).toStrictEqual(true);
    expect(knightValidMovement).toStrictEqual(true);
    expect(pawnValidMovement).toStrictEqual(true);

    expect(kingInvalidMovement).toStrictEqual(false);
    expect(queenInvalidMovement).toStrictEqual(false);
    expect(rookInvalidMovement).toStrictEqual(false);
    expect(bishopInvalidMovement).toStrictEqual(false);
    expect(knightInvalidMovement).toStrictEqual(false);
    expect(pawnInvalidMovement).toStrictEqual(false);
  });
  
});

const pieceExist = (pieceId: number, pieces: ChessPiece[]): boolean => {
  return pieces.some(piece => piece.pieceId === pieceId);
};

const piecePosition = (pieceId: number, isWhitePlayer: boolean): boolean => {
  const pieces = isWhitePlayer ? whitePieces : blackPieces;
  const piece = pieces.find(piece => piece.pieceId === pieceId);

  return !!piece && (
    piece.position.x >= 1 && piece.position.x <= 8 &&
    piece.position.y >= 1 && piece.position.y <= 8
  );
};

const pieceMovement = (piece: ChessPiece, nextMoveX: number, nextMoveY: number): boolean => {
  const currentX = piece.position.x;
  const currentY = piece.position.y;
  const pieceType = piece.pieceType;

  const deltaX = Math.abs(nextMoveX - currentX);
  const deltaY = Math.abs(nextMoveY - currentY);

  switch (piece.pieceType) {
    case 'K':
      return deltaX <= 1 && deltaY <= 1;
      
    case 'Q':
      return deltaX === deltaY || currentX === nextMoveX || currentY === nextMoveY;
      
    case 'R':
      return currentX === nextMoveX || currentY === nextMoveY;
      
    case 'B':
      return deltaX === deltaY;
      
    case 'N':
      return (deltaX === 1 && deltaY === 2) || (deltaX === 2 && deltaY === 1);
      
    case 'P':
      if (currentX === nextMoveX) {
        const direction = piece.isWhite === true ? 1 : -1;
        if (nextMoveY - currentY === direction) {
          return true;
        } else if (nextMoveY - currentY === direction * 2 && ((piece.isWhite === true && currentY === 1) || (piece.isWhite === false && currentY === 6))) {
          return true;
        }
      } else if (Math.abs(nextMoveX - currentX) === 1 && nextMoveY - currentY === (piece.isWhite === true ? 1 : -1)) {
        return true;
      }
      return false;
      
    default:
      return false;
  }
}

