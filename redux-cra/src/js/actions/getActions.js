import{ FETCH_GNOMES } from './types';

export const fetchGnomes = () => dispatch => {
        fetch('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json')
        .then(res => res.json())
        .then(gnomes =>
            dispatch({
                type:FETCH_GNOMES,
                payload: gnomes.Brastlewark
            }));
}

//SEARCH FILTERS=================================================
export const fetchGnomesFilters = () => dispatch => {
    fetch('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json')
    .then(res => res.json())
    .then(gnomes =>
        dispatch({
            type:FETCH_GNOMES,
            payload: gnomes.Brastlewark
        }));
}

//SEARCH SORT==============================================================================