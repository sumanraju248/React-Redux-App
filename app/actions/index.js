export const selectedUser = (user) => {
    console.log("It's in Action Creators", user.name);
    return {
        type: "USER_SELECTED",
        payload: user

    }

};

