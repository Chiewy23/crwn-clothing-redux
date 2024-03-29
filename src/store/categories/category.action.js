import { getCategoriesAndDocuments } from "../../utilities/firebase/firebase.utils";
import { createAction } from "../../utilities/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPES } from "./category.types";

export const setCategories = (categories) => createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categories);

export const fetchCategoriesStart = () => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categories) => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categories);

export const fetchCategoriesFail = (error) => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAIL, error);

export const fetchCategoriesAsync = () => async (dispatch) => {
    dispatch(fetchCategoriesStart());

    try {
        const categories = await getCategoriesAndDocuments('categories');
        dispatch(fetchCategoriesSuccess(categories));
    } catch (error) {
        dispatch(fetchCategoriesFail(error));
    }
};