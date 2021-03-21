
const Increment = () => {
  return ({
    type:'Increment',
    payload:1
  })
}

const Decrement = () => {
  return ({
    type:'Decrement',
    payload:1
  })
}

const Move = (move) => {
  
  return ({
    type:'MOVE',
    payload:move
  })
}

export {Increment,Decrement,Move};
