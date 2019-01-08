

const initialState = {
    gnomes : [],
    gnome : null,
    gnomeDetailsLoading : true
} 

export default function(state=initialState, action){
    switch(action.type){
        case "FETCH_GNOMES":
            return {
                ...state,
                gnomes: action.payload
            };
        case "GET_GNOME":
            return{
                ...state,
                gnome:action.payload,
                gnomeDetailsLoading: false
            }
        default:
            return state;

    }
}