import axios from 'axios';

const URL = 'http://localhost:8005/api';

export const getBatches = () => {
    return dispatch => {
        dispatch({type: "IS_LOADING"});
        axios.get(`${URL}/batch`, {
            headers: {"Authorization": 'Bearer ' + localStorage.getItem( "token") }
        })
            .then( response => {
               dispatch({type: "FETCH_BATCHES", payload: response.data})
            } )
            .catch( error => {
                dispatch({type: "FAILED_BATCH", payload: error})
            } );
    };
};

export const getBatch = (id) => {
    return dispatch => {
        dispatch({type: "IS_LOADING"});
        axios.get(`${URL}/batch/${id}`, {
            headers: {"Authorization": 'Bearer ' + localStorage.getItem( "token") }
        })
            .then( response => {
               dispatch({type: "FETCH_BATCH", payload: response.data})
            } )
            .catch( error => {
                dispatch({type: "FAILED_BATCH", payload: error})
            } );
    };
};

export const addBatch = (values, history) => {
    return dispatch => {
        dispatch({type: "IS_LOADING"});
        axios.post(`${URL}/batch`,values, {
            headers: {"Authorization": 'Bearer ' + localStorage.getItem( "token") }
        })
            .then( response => {
               dispatch({type: "ADD_BATCH"})
               history.push(`${URL}/batch/test`);
            } )
            .catch( error => {
                dispatch({type: "FAILED_BATCH", payload: error})
            } );
    };
};

export const getStatus = () => {
    return dispatch => {
        axios.get(`${URL}/batch/status`, {
            headers: {"Authorization": 'Bearer ' + localStorage.getItem( "token") }
        })
            .then( response => {
               dispatch({type: "FETCH_STATUS", payload: response.data})
            } )
            .catch( error => {
                dispatch({type: "FAILED_BATCH", payload: error})
            } );
    };
};

export const getTrans = (id) => {
    return dispatch => {
        dispatch({type: "IS_LOADING"});
        axios.get(`${URL}/trans/${id}`, {
            headers: {"Authorization": 'Bearer ' + localStorage.getItem( "token") }
        })
            .then( response => {
               dispatch({type: "FETCH_TRANS", payload: response.data})
            } )
            .catch( error => {
                dispatch({type: "FAILED_BATCH", payload: error})
            } );
    };
};