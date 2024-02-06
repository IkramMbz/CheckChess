import { describe, expect, it } from 'vitest'

type Movie = { title: string; year: number; };
type Movies = Movie[];

type Position = {
  letter: string;
  number: number;
}

type chessPiece = {
  name: string;
  isWhite: boolean;
  pieceCode: string;
  pieceId: number;
  position: Position;
}

const initPiece = (name, iswhute piececoce pieceid positon) =>{
  return {
    "Reine", 2, [1, 2], "Q"
  }
}

describe('Test mooves', () => {
  const e = new chessPiece("Roi", 1, ["A", "1"], "K");

  const pieces = [
    new chessPiece(),
    new ChessPiece("Tour", 3, [1, 3], "R"),
    new ChessPiece("Fou", 4, [1, 4], "B"),
    new ChessPiece("Cavalier", 5, [1, 5], "N"),
    new ChessPiece("Pion", 6, [2, 1], "P")
  ];


  const MOVIE_COLLECTION = [
    {
      title: "The Matrix",
      year: 1999,
    },
    {
      title: "A beautiful mind",
      year: 2001,
    },
    {
      title: "Intouchable",
      year: 2011,
    },
    {
      title: "Forest Gump",
      year: 1994,
    },
  ]; 

  it(`should found "The Matrix" when it's query and in the collection`, () => {
    const moviesFound = findByTitle('The Matrix')(MOVIE_COLLECTION);
    expect(moviesFound).toStrictEqual([{
        title: "The Matrix",
        year: 1999,
    }]);
  });
});

