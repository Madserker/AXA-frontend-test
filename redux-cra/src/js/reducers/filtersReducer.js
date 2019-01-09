

const initialState = {
    hairFilters : []
} 

export default function(state=initialState, action){
    switch(action.type){
        case "HAIR_FILTERS":
            return {
                ...state,
                hairFilters: action.payload,
            };
        case "GET_GNOME":
            return{
                ...state,
                gnome:action.payload,
                gnomeDetailsLoading: false,
                listLoading: true
            }
        default:
            return state;

    }
}