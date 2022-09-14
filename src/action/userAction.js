const addUser = (user) => {
    console.log("user", user);
    return {
        type: 'ADD_USER',
        user
    }
};

export default addUser;