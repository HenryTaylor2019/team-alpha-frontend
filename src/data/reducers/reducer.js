import initialState from '../initialState';

const counterReducer = state => {  
    
    // counter < names.length-1 ? counter + 1 : counter * 0
    
    return {
      ...state,
      counter: state.counter + 1,
    }
  }
  
  const scoreReducer = state => {
    return {
      ...state,
      score: state.score + 1,
    }
  }

  const reducer = (state, action) => {
        switch (action.type) {
            case "INCREMENT_COUNTER": return counterReducer(state);
             
            case "INCREMENT_SCORE": return scoreReducer(state);
  
        default: return state;
        }
  };

  export default reducer;