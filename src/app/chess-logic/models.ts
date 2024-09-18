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

export const pieceImagePaths: Readonly<Record<FENChar, string>> = {
  [FENChar.WhitePawn]: './assets/pieces/white_pawn.svg',
  [FENChar.WhiteKnight]: './assets/pieces/white_knight.svg',
  [FENChar.WhiteBishop]: './assets/pieces/white_bishop.svg',
  [FENChar.WhiteRook]: './assets/pieces/white_rook.svg',
  [FENChar.WhiteQueen]: './assets/pieces/white_queen.svg',
  [FENChar.WhiteKing]: './assets/pieces/white_king.svg',
  [FENChar.BlackPawn]: './assets/pieces/black_pawn.svg',
  [FENChar.BlackKnight]: './assets/pieces/black_knight.svg',
  [FENChar.BlackBishop]: './assets/pieces/black_bishop.svg',
  [FENChar.BlackRook]: './assets/pieces/black_rook.svg',
  [FENChar.BlackQueen]: './assets/pieces/black_queen.svg',
  [FENChar.BlackKing]: './assets/pieces/black_king.svg',
  
}