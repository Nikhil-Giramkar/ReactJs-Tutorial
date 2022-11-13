const reducer = (state = 20, action) => {
  if (action.type === "deposit") {
    return state + action.payload;
  } 
  else if (action.type === "withdraw") {
    if(state<=0 || state-action.payload<=0){
      alert("Balance is zero...")
      return 0;
    }
    return state - action.payload;
  } 
  else {
    return state;
  }
};

export default reducer
