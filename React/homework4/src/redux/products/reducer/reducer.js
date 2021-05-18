import {

    LOAD,
    LOAD_SUCCESS,
    LOAD_ERROR,
    ADD_TO_CART,
    DELETE_FROM_CART,
    SWITCH_FAV,
    MAP_RPODUCT_WITH_FAVORITE,
    CONFIRM_ACTION,

} from "../actions/actions";


import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";


const INITIAL_STATE = {
    products: [],
    isLoading: false,
    error: null,
    confirmAction: null,
    addFavorites: localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : [],
    shopBasket: localStorage.getItem('shop-basket') ? JSON.parse(localStorage.getItem('shop-basket')) : [],
}

export const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case LOAD:
            return {
                ...state, isLoading: action.payload
            }

        case LOAD_SUCCESS:
            return {
                ...state, products: action.payload
            }

        case LOAD_ERROR:
            return {
                ...state, error: action.payload
            }

        case ADD_TO_CART:
            return {
                ...state,
                shopBasket: state.shopBasket.find(item => item.id === action.payload) ?
                    state.shopBasket.map(item => {
                        if (item.id === action.payload) {
                            return {
                                id: action.payload,
                                count: item.count + 1,
                            }
                        }
                        return item;
                    }) : [...state.shopBasket, {
                        id: action.payload,
                        count: 1
                    }]
            }

        case DELETE_FROM_CART:
            return {
                ...state,
                shopBasket: state.shopBasket.filter(item => item.id === action.payload ? false : true)
            }

        case SWITCH_FAV:
            return {
                ...state,
                addFavorites: state.addFavorites.includes(action.payload) ?
                    state.addFavorites.filter((n) => n !== action.payload) :
                    [...state.addFavorites, action.payload]
            }

        case MAP_RPODUCT_WITH_FAVORITE:
            return {
                ...state,
                isFavorite: state.addFavorites.includes(action.payload),
                count: state.shopBasket.find((item) => item.id === action.payload)?.count,
            }

        case CONFIRM_ACTION:
            return {
                ...store,
                confirmAction: action.payload,
            };


        default:
            return state;
    }
}


export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

store.subscribe(() => {
    localStorage.setItem(
        "shop-basket",
        JSON.stringify(store.getState().shopBasket)
    );
    localStorage.setItem(
        "favorites",
        JSON.stringify(store.getState().addFavorites)
    );
});