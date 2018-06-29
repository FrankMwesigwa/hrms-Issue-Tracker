import axios from 'axios';

export const URL = 'http://localhost:8005/api';

export const getUsers = () => {
    return dispatch => {
        dispatch({type: "IS_LOADING"});
        axios.get(`${URL}/users`, {
            headers: {"Authorization": 'Bearer ' + localStorage.getItem( "token") }
        })
            .then( response => {
               dispatch({type: "FETCH_USERS", payload: response.data})
            } )
            .catch( error => {
                dispatch({type: "USERS_FAILED", payload: error})
            } );
    };
};

export const getUser = (id) => {
    return dispatch => {
        dispatch({type: "IS_LOADING"});
        axios.get(`${URL}/users/${id}`, {
            headers: {"Authorization": 'Bearer ' + localStorage.getItem( "token") }
        })
            .then( response => {
               dispatch({type: "FETCH_USER", payload: response.data})
            } )
            .catch( error => {
                dispatch({type: "USERS_FAILED", payload: error})
            } );
    };
};

export const addUser = (values, history) => {
    return dispatch => {
        dispatch({type: "IS_LOADING"});
        axios.post(`${URL}/addUser`,values, {
            headers: {"Authorization": 'Bearer ' + localStorage.getItem( "token") }
        })
            .then( response => {
               dispatch({type: "ADD_USER"})
               history.push('/users');
            } )
            .catch( error => {
                dispatch({type: "USERS_FAILED", payload: error})
            } );
    };
};

export const getRoles = () => {
    return dispatch => {
        axios.get(`${URL}/user/roles`, {
            headers: {"Authorization": 'Bearer ' + localStorage.getItem( "token") }
        })
            .then( response => {
               dispatch({type: "FETCH_ROLES", payload: response.data})
            } )
            .catch( error => {
                dispatch({type: "USERS_FAILED", payload: error})
            } );
    };
};

export const getBranches = () => {
    return dispatch => {
        axios.get(`${URL}/user/branches`, {
            headers: {"Authorization": 'Bearer ' + localStorage.getItem( "token") }
        })
            .then( response => {
               dispatch({type: "FETCH_BRANCHES", payload: response.data})
            } )
            .catch( error => {
                dispatch({type: "USERS_FAILED", payload: error})
            } );
    };
};