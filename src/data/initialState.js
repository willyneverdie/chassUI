//knight = kn, pawn = p, rook = r,queen = q, king =ki ,bishop = b
import Knight from '../pieces/Knight';
import Rook from '../pieces/Rook';
import Bishop from '../pieces/Bishop';
import Queen from '../pieces/Queen';
import King from '../pieces/King';
import Pawn from '../pieces/Pawn';


let initialBoard = new Map([
  [ "A1", <Rook color='white' code='r'/> ],
  [ "B1", <Knight color='white' code='kn'/> ],
  [ "C1", <Bishop color='white' code='b'/> ],
  [ "D1", <Queen color='white' code='q'/> ],
  [ "E1", <King color='white' code='ki'/> ],
  [ "F1", <Bishop color='white' code='b'/> ],
  [ "G1", <Knight color='white' code='kn'/> ],
  [ "H1", <Rook color='white' code='r'/> ],
  [ "A2", <Pawn color='white' code='p'/> ],
  [ "B2", <Pawn color='white' code='p'/> ],
  [ "C2", <Pawn color='white' code='p'/> ],
  [ "D2", <Pawn color='white' code='p'/> ],
  [ "E2", <Pawn color='white' code='p'/> ],
  [ "F2", <Pawn color='white' code='p'/> ],
  [ "G2", <Pawn color='white' code='p'/> ],
  [ "H2", <Pawn color='white' code='p'/> ],
  [ "A8", <Rook color='black' code='r'/> ],
  [ "B8", <Knight color='black' code='kn'/> ],
  [ "C8", <Bishop color='black' code='b'/> ],
  [ "D8", <Queen color='black' code='q'/> ],
  [ "E8", <King color='black' code='ki'/> ],
  [ "F8", <Bishop color='black' code='b'/> ],
  [ "G8", <Knight color='black' code='kn'/> ],
  [ "H8", <Rook color='black' code='r'/> ],
  [ "A7", <Pawn color='black' code='p'/> ],
  [ "B7", <Pawn color='black' code='p'/> ],
  [ "C7", <Pawn color='black' code='p'/> ],
  [ "D7", <Pawn color='black' code='p'/> ],
  [ "E7", <Pawn color='black' code='p'/> ],
  [ "F7", <Pawn color='black' code='p'/> ],
  [ "G7", <Pawn color='black' code='p'/> ],
  [ "H7", <Pawn color='black' code='p'/> ]

]);
console.log('aqui wn',initialBoard);
export default new Map(initialBoard);
