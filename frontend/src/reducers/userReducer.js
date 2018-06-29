const initialState = {
    users: [],
    user: {},
    addUser:null,
    loading: false,
    error: false,
    roles: [],
    branches: []
};

export default function (state = initialState, action) {
    switch (action.type) {             
      case "IS_LOADING": {
        return {...state, loading : true, error : false};
      }      
      case "FETCH_USERS": {
        return {...state, loading : false, users : action.payload};
      }  
      case "FETCH_USER": {
        return {...state, loading : false, batch: action.payload.data};
      }          
      case "USERS_FAILED": {
        return {...state, loading : false, error : action.payload.error};
      }
      case "ADD_USER": {
        return {...state, loading : false, addUser : action.payload};
      }
      case "FETCH_ROLES": {
        return {...state, loading : false, roles : action.payload};
      }
      case "FETCH_BRANCHES": {
        return {...state, loading : false, branches : action.payload};
      }
          
    }
    return state
}