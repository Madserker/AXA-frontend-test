

const initialState = {
    hairFilters : [],
    professionFilters : []
} 

export default function(state=initialState, action){
    switch(action.type){
        case "HAIR_FILTERS":
            return {
                ...state,
                hairFilters: action.payload,
            };
            case "HAIR_FILTERS_ADD":
            return {
                ...state,
                hairFilters: action.payload,
            };
            case "HAIR_FILTERS_REMOVE":
            return {
                ...state,
                hairFilters: action.payload,
            };
            case "PROFESSION_FILTERS_ADD":
            return {
                ...state,
                professionFilters: action.payload,
            };
            case "PROFESSION_FILTERS_REMOVE":
            return {
                ...state,
                professionFilters: action.payload,
            };
            case "CLEAR_FILTERS":
            return {
                ...state,
                professionFilters: action.payload,
                hairFilters: action.payload,
            };
        default:
            return state;

    }
}