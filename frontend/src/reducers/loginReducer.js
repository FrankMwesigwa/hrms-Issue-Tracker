
const initialState = { 
  loading: false,
  error: '',
  authenticated : false,
  failed : false,
  account : null
};

const loginReducer = (state = initialState, action) => {  
  switch(action.type) {
    case "IS_AUTHENTICATED": 
      return {...state, authenticated : true, failed : false, account : action.payload};     
    case "IS_NOT_AUTHENTICATED": 
      return {...state, authenticated : false, account : null};          
    case "LOGIN_SUCCESS": 
      return {...state, authenticated : true, failed : false, account : null};
    case "LOGIN_FAILED": 
      return {...state, authenticated : false, failed : true, account : null, error: action.payload };
    
  }

  return state;
  
};

export default loginReducer;