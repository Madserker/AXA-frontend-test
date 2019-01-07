

const initialState = {
    gnomes : []
} 

export default function(state=initialState, action){
    switch(action.type){
        case "FETCH_GNOMES":
            return {
                ...state,
                gnomes: action.payload
            };

        default:
            return state;

    }
}