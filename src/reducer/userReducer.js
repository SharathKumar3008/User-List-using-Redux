const defaultUserState = [];

const userReducer = (state=defaultUserState, action) => {
    switch(action.type) {
        case 'ADD_USER':
            return [...state, action.user]
        default:
            return state
    }
};

export default userReducer;