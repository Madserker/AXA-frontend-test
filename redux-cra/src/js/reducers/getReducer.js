

const initialState = {
    gnomes : [],
    gnome : null
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
                gnome:action.payload
            }
        default:
            return state;

    }
}