import axios from "axios";

const ROOT_URL = 'http://localhost:8005/api';

export const isAuthenticated = () => {   
  return dispatch => {                
     let url =  `${ROOT_URL}/authenticated`
     var config = {
      headers: {'Authorization':  'Bearer ' + localStorage.getItem( "token" )}
    };

     axios.get(url, config)
        .then((response) => {
          dispatch({type: "IS_AUTHENTICATED", payload: response.data})
        })
        .catch((err) => {
          dispatch({type: "IS_NOT_AUTHENTICATED", payload: ''})
        })
    }  
}

export const login = ({username, password}) => {
    return dispatch => {            
     axios.post(`${ROOT_URL}/login`, {username, password} )
        .then((response) => {    
          localStorage.removeItem( "token" )       
          localStorage.setItem( "token", response.data.id_token);         
          dispatch({type: "LOGIN_SUCCESS", payload: response.data}) 
        })
        .catch((error) => {
          dispatch({type: "LOGIN_FAILED", payload: 'Invalid username or password'})
        })
    }
}

export const logout = () => {   
  localStorage.removeItem( "token" )   
  return { type: "IS_NOT_AUTHENTICATED", payload: ''}
}