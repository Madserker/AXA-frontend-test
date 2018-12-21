import{ FETCH_GNOMES } from './types';

export function fetchGnomes(){
    return function(dispatch){
        fetch('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json')
        .then(res => res.json())
        .then(gnomes =>
            dispatch({
                type:FETCH_GNOMES,
                payload: gnomes.Brastlewark
            }));
    }
}


//SEARCH FILTERS ACTIONS=================================================
//Se puede aplicar mas de un filtro a la vez,
//Por eso necesitamos aplicar estos filtros a la lista que tenemos en state de store
//tambien ordenamos la lista que retornamos de los filtros, y no la lista original
export function fetchGnomesFilters(){
    return function(dispatch){
        fetch('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json')
        .then(res => res.json())
        .then(gnomes => filterByHairColor("Pink",gnomes.Brastlewark))
        .then(gnomes =>
            dispatch({
                type:FETCH_GNOMES,
                payload: gnomes
            }));
}
}

//SEARCH FILTERS FUNCTIONS=================================================
function filterByHairColor(hairColor, gnomes){
    var gnomesFiltered = [];

    gnomes.map((gnome =>{
        if(gnome.hair_color === hairColor){
            gnomesFiltered.push(gnome);
        }
    }));

    return gnomesFiltered;
}

//SEARCH SORT==============================================================================