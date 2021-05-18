import {load, loadSuccess, loadError} from "./actions";

const PRODUCT_LINK = "./productCollections.json";

const productsLoading = () => {
    return (dispatch) => {
        dispatch(load(true))
        fetch(PRODUCT_LINK)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error("Failed to load");
            })
            .then((cards) => {
                dispatch(load(false))
                dispatch(loadSuccess(cards))
            })
            .catch((e) => {
                dispatch(loadError(e.message));
            });
    }
}
export default productsLoading;
