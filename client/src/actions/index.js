export const FETCH_CHEESES_SUCCESS = 'FETCH_CHEESES_SUCCESS';
export const fetchCheesesSuccess = () => ({
    type: FETCH_CHEESES_SUCCESS
})

export const fetchCheeses = () => dispatch => {
    return fetch('http://localhost:8080//api/cheeses').then(res => {
        if(!res.ok){
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(cheese => {
        dispatch(fetchCheesesSuccess());
    });
}

export const FETCH_CHEESES_REQUEST = 'FETCH_CHEESES_REQUEST';
export const fetchCheesesRequest = () => ({
    type: FETCH_CHEESES_REQUEST
});

export const FETCH_CHEESES_ERROR = 'FETCH_CHEESES_ERROR';
export const fetchCheesesError = error => ({
    type: FETCH_CHEESES_ERROR,
    error
});