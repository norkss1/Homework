import {reducer} from "./reducer";
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

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

export {store};