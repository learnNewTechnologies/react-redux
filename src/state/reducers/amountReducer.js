const reducer = (state= 0, action) => {
    if(action.type === 'deposit'){
        return state + action.payload;
    }else if(action.type === 'withdraw'){
        if(state > 0){
            return state - action.payload;
        }else{
            return state;
        }
    }else{
        return state;
    }
} 
export default reducer;