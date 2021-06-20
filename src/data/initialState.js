//knight = kn, pawn = p, rook = r,queen = q, king =ki ,bishop = b
import Knight from '../pieces/Knight';
import Rook from '../pieces/Rook';
import Bishop from '../pieces/Bishop';
import Queen from '../pieces/Queen';
import King from '../pieces/King';
import Pawn from '../pieces/Pawn';
import { ItemTypes, knightCode, kingCode, queenCode, rookCode, bishopCode, pawnCode } from '../Constants';


let initialBoard = new Map([
  [ "A1", <Rook color='white' code={rookCode}/> ],
  [ "B1", <Knight color='white' code={knightCode}/> ],
  [ "C1", <Bishop color='white' code={bishopCode}/> ],
  [ "D1", <Queen color='white' code={queenCode}/> ],
  [ "E1", <King color='white' code={kingCode}/> ],
  [ "F1", <Bishop color='white' code={bishopCode}/> ],
  [ "G1", <Knight color='white' code={knightCode}/> ],
  [ "H1", <Rook color='white' code={rookCode}/> ],
  [ "A2", <Pawn color='white' code={pawnCode}/> ],
  [ "B2", <Pawn color='white' code={pawnCode}/> ],
  [ "C2", <Pawn color='white' code={pawnCode}/> ],
  [ "D2", <Pawn color='white' code={pawnCode}/> ],
  [ "E2", <Pawn color='white' code={pawnCode}/> ],
  [ "F2", <Pawn color='white' code={pawnCode}/> ],
  [ "G2", <Pawn color='white' code={pawnCode}/> ],
  [ "H2", <Pawn color='white' code={pawnCode}/> ],
  [ "A8", <Rook color='black' code={rookCode}/> ],
  [ "B8", <Knight color='black' code={knightCode}/> ],
  [ "C8", <Bishop color='black' code={bishopCode}/> ],
  [ "D8", <Queen color='black' code={queenCode}/> ],
  [ "E8", <King color='black' code={kingCode}/> ],
  [ "F8", <Bishop color='black' code={bishopCode}/> ],
  [ "G8", <Knight color='black' code={knightCode}/> ],
  [ "H8", <Rook color='black' code={rookCode}/> ],
  [ "A7", <Pawn color='black' code={pawnCode}/> ],
  [ "B7", <Pawn color='black' code={pawnCode}/> ],
  [ "C7", <Pawn color='black' code={pawnCode}/> ],
  [ "D7", <Pawn color='black' code={pawnCode}/> ],
  [ "E7", <Pawn color='black' code={pawnCode}/> ],
  [ "F7", <Pawn color='black' code={pawnCode}/> ],
  [ "G7", <Pawn color='black' code={pawnCode}/> ],
  [ "H7", <Pawn color='black' code={pawnCode}/> ]

]);
console.log('aqui wn',initialBoard);
export default new Map(initialBoard);
