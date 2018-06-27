import axios from "axios";

const ROOT_URL = 'http://localhost:8005/api';

export const isAuthenticated = () => {   
  return dispatch => {                
     let url =  'http://localhost:8005/api/authenticated'
     var config = {
      headers: {'Authorization':  'Bearer ' + localStorage.getItem( "token" )}
    };
    dispatch({type: "IS_LOADING"});
     axios.get(url, config)
        .then((response) => {
          dispatch({type: "IS_AUTHENTICATED", payload: response.data})
        })
        .catch((err) => {
          dispatch({type: "IS_NOT_AUTHENTICATED", payload: ''})
        })
    }  
}

export const doLogin = ({username, password}) => {
    return dispatch => {            
     axios.post(`${ROOT_URL}/login`, {username, password} )
        .then((response) => {    
          localStorage.removeItem( "token" )       
          localStorage.setItem( "token", response.data.id_token);  
          console.log(response.data)    ;          
          dispatch({type: "LOGIN_SUCCESS", payload: response.data}) 
        })
        .catch((err) => {
          dispatch({type: "LOGIN_FAILED", payload: err})
        })
    }

  return {
    type: "LOGIN_EMPTY",
    payload: {
      message : "Empty username or password.",
    }
  }
}


export const doLogout = () => {   
  localStorage.removeItem( "token" )   
  return {
    type: "IS_NOT_AUTHENTICATED",
    payload: ''
  }
}