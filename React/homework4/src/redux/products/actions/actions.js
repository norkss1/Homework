export const ADD_TO_CART = "ADD_TO_CART";
export const DELETE_FROM_CART = "DELETE_FROM_CART";
export const SWITCH_FAV = "SWITCH_FAV";
export const MAP_RPODUCT_WITH_FAVORITE = "MAP_RPODUCT_WITH_FAVORITE";
export const CONFIRM_ACTION = "CONFIRM_ACTION";

export const LOAD = "LOAD";
export const LOAD_SUCCESS = "LOAD_SUCCESS";
export const LOAD_ERROR = "LOAD_ERROR";

export const load = (load) => ({
    type: LOAD,
    payload: load,
});

export const loadSuccess = (payload) => ({
    type: LOAD_SUCCESS,
    payload: payload,
});

export const loadError = (error) => ({
    type: LOAD_ERROR,
    payload: error
});


export const addToCart = (id) => ({
    type: ADD_TO_CART,
    payload: id,
});

export const deleteFromCart = (id) => ({
    type: DELETE_FROM_CART,
    payload: id,
});

export const switchFav = (id) => ({
    type: SWITCH_FAV,
    payload: id,
});

export const mapProductWithFavorite = (product) => ({
    type: MAP_RPODUCT_WITH_FAVORITE,
    payload: product.article,
});

export const confirmAction = (action) => ({
    type: CONFIRM_ACTION,
    payload: action,
});



