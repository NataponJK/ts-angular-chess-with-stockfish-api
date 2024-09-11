export enum Color {
  White,
  Black,
}

export type Coords = {
  x: number;
  y: number;
};

export enum FENChar {
  WhitePawn = 'White_Pawn',
  WhiteKnight = 'White_Knight',
  WhiteBishop = 'White_Bishop',
  WhiteRook = 'White_Rook',
  WhiteQueen = 'White_Queen',
  WhiteKing = 'White_King',
  BlackPawn = 'Black_Pawn',
  BlackKnight = 'Black_Knight',
  BlackBishop = 'Black_Bishop',
  BlackRook = 'Black_Rook',
  BlackQueen = 'Black_Queen',
  BlackKing = 'Black_King',
}
