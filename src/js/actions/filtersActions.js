export function editHairFilters(filters){
    return function(dispatch){
            dispatch({
                type:"HAIR_FILTERS",
                payload: filters
            });
    }
}
export function editAgeFilters(filter){
    return function(dispatch){
            dispatch({
                type:"AGE_FILTERS",
                payload: filter
            });
    }
}
export function editHeightFilters(filter){
    return function(dispatch){
            dispatch({
                type:"HEIGHT_FILTERS",
                payload: filter
            });
    }
}

export function editWeightFilters(filter){
    return function(dispatch){
            dispatch({
                type:"WEIGHT_FILTERS",
                payload: filter
            });
    }
}



export function addHairFilter(filters,filter){
    return function(dispatch){
        filters.push(filter);
        console.log(filters);

            dispatch({
                type:"HAIR_FILTERS_ADD",
                payload: filters
            });
    }
}

export function removeHairFilter(filters,filter){
    return function(dispatch){
        var index = filters.indexOf(filter);
        filters.splice(index,1)
        console.log(filters);
            dispatch({
                type:"HAIR_FILTERS_REMOVE",
                payload: filters
            });
    }
}


export function addProfessionFilter(filters,filter){
    return function(dispatch){
        filters.push(filter);
        console.log(filters);

            dispatch({
                type:"PROFESSION_FILTERS_ADD",
                payload: filters
            });
    }
}

export function removeProfessionFilter(filters,filter){
    return function(dispatch){
        var index = filters.indexOf(filter);
        filters.splice(index,1)
        console.log(filters);
            dispatch({
                type:"PROFESSION_FILTERS_REMOVE",
                payload: filters
            });
    }
}

export function clearFilters(){
    return function(dispatch){
            dispatch({
                type:"CLEAR_FILTERS",
                payload: []
            });
    }
}
