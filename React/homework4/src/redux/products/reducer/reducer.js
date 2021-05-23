import {

    LOAD,
    LOAD_SUCCESS,
    LOAD_ERROR,
    ADD_TO_CART,
    DELETE_FROM_CART,
    SWITCH_FAV,
    CONFIRM_ACTION,

} from "../actions/actions";


const INITIAL_STATE = {
    products: [],
    isLoading: false,
    error: null,
    confirmAction: null,
    addFavorites: localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : [],
    shopBasket: localStorage.getItem('shop-basket') ? JSON.parse(localStorage.getItem('shop-basket')) : [],
    isFavorite: false,
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
                    [...state.addFavorites, action.payload],
                isFavorite: state.addFavorites.includes(action.payload),

            }

        case CONFIRM_ACTION:
            return {
                ...state,
                confirmAction: action.payload,
            };


        default:
            return state;
    }
}