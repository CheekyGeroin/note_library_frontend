export const selectLoggedIn = (state) => state.auth.isLoggedIn;

export const selectUsername = (state) => state.auth.user.username;

export const selectUserEmail = (state) => state.auth.user.email;
