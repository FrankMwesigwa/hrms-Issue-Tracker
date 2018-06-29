const initialState = {
    batches: [],
    status: [],
    addbatch:null,
    loading: false,
    error: false
};

export default function (state = initialState, action) {
    switch (action.type) {             
      case "IS_LOADING": {
        return {...state, loading : true, error : false};
      }      
      case "FETCH_BATCHES": {
        return {...state, loading : false, batches : action.payload};
      }  
      case "FETCH_BATCH": {
        return {...state, loading : false, batch: action.payload.data};
      }          
      case "FAILED_BATCH": {
        return {...state, loading : false, error : action.payload.error};
      }
      case "ADD_BATCH": {
        return {...state, loading : false, addbatch : action.payload};
      }
      case "FETCH_STATUS": {
        return {...state, loading : false, status : action.payload};
      }
          
    }
    return state
}