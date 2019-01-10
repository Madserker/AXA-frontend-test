

const initialState = {
    gnomes : [],
    gnome : null,
    gnomeDetailsLoading : true,
    listLoading : true,
} 

export default function(state=initialState, action){
    switch(action.type){
        case "FETCH_GNOMES":
            return {
                ...state,
                allGnomes: action.payload,
                gnomes: action.payload,
                listLoading: false
            };
            case "FETCH_GNOMES_FILTERS":
            return {
                ...state,
                gnomes: action.payload,
                listLoading: false
            };
        case "GET_GNOME":
            return{
                ...state,
                gnome:action.payload,
                gnomeDetailsLoading: false,
                listLoading: true
            }
            case "LOADED":
            return{
                ...state,
                listLoading: false
            }
            case "RESET":
            return{
                ...state,
                gnomes: state.allGnomes
            }
        default:
            return state;

    }
}