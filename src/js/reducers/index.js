import {combineReducers} from 'redux';
import getReducer from './getReducer';
import filtersReducer from './filtersReducer';

export default combineReducers({
    gnomes : getReducer,
    filters : filtersReducer
});