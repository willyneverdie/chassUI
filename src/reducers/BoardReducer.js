const boardReducer = (state=['B','1'], action) => {
 console.log('inside boardReducer');
  switch(action.type){
    case 'MOVE':
      console.log('inside boardReducer move');
      console.log(action.payload);
      return action.payload;
    default:
      console.log('inside boardReducer default');
        return state
  }
};

export default boardReducer;
