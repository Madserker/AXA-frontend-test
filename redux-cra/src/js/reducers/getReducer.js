

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
        default:
            return state;

    }
}