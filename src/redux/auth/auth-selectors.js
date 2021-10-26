const getIsLoggedIn = (state) => state.auth.isLoggedIn;
const getUserName = (state) => state.auth.user.name;
const getUserEmail = (state) => state.auth.user.email;
const getIsRefreshing = (state) => state.auth.isRefreshing;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getUserEmail,
  getIsRefreshing,
};

export default authSelectors;
