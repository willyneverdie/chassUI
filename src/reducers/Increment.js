
const Increment = (state=0, action) => {

  switch(action.type){
    case 'Increment':
      console.log('Inc');
      return state+action.payload;
    default:
      console.log('Default Increment');
      return state;
  }
}

export default Increment;
