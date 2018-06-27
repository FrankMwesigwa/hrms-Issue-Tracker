
const INITIAL_STATE = { 
  error: '',
  authenticated : false,
  failed : false,
  userData : null,
  loading: false,
}

export default function (state = INITIAL_STATE, action) {  
  switch(action.type) {
    case "IS_LOADING": 
      return {...state, loading : true, error : false};
    case "IS_AUTHENTICATED": 
      return {...state, authenticated : true, loading : false, failed : false, userData : action.payload};     
    case "IS_NOT_AUTHENTICATED": 
      return {...state, authenticated : false, loading : false, userData : null};          
    case "LOGIN_SUCCESS": 
      return {...state, authenticated : true, loading : false, failed : false, userData : null};
    case "LOGIN_FAILED": 
      return {...state, authenticated : false, loading : false, failed : true, userData : null, error: action.payload };
    case "LOGIN_EMPTY": 
      return {...state,authenticated : false, loading : false, failed : true, userData : null};
    
  }

  return state;
}