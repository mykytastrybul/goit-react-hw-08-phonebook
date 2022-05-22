const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserEmail = state => state.auth.user.email;
const getLoading = state => state.auth.loading;

const authSelectors = {
  getIsLoggedIn,
  getUserEmail,
  getLoading,
};
export default authSelectors;
