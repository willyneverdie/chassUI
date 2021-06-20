
const AlgebraicNotationReducer = (state=[], action) => {

  switch(action.type){
    case 'write':
      console.log('write');
      console.log(action);
      state.push(action.payload);
      return state;
    default:
      console.log('Default write');
      return state;
  }
}

export default AlgebraicNotationReducer;
