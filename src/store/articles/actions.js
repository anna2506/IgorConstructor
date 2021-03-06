import actionTypes from './actionTypes'
import axiosInstance from "../../axiosInstance";

export const setArticles = (articles) => {
    return {
        type: actionTypes.FETCH_SUCCESS,
        articles: articles
    }
};

export const fetchFailed = (err) => {
    return {
        type: actionTypes.FETCH_FAIL,
        error: err
    }
};

export const fetch = () => {
    return (dispatch) => {
        axiosInstance.get('/articles.json').then((response) => {
                dispatch(setArticles(response.data))
            }).catch((err) => {
                console.log(err)
                dispatch(fetchFailed(err))
            })
    }
};

export const del = (id) => {
    return (dispatch) => {
        axiosInstance.delete(`/articles/${id}.json`).then((response) => {
            dispatch(fetch())
        }).catch((err) => {
            console.log(err)
            dispatch(fetchFailed(err))
        })
    }
}
