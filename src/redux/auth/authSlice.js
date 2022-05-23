const { createSlice } = require('@reduxjs/toolkit');
const { register, logIn, logOut, current } = require('./authThunk');

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: null,
      email: null,
    },
    loading: false,
    error: null,
    token: null,
    isLoggedIn: false,
  },
  extraReducers: {
    [register.pending](state) {
      state.loading = true;
      state.error = null;
    },
    [register.fulfilled](state, action) {
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [register.rejected](state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    [logIn.pending](state) {
      state.loading = true;
      state.error = null;
    },
    [logIn.fulfilled](state, action) {
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logIn.rejected](state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    [logOut.pending](state) {
      state.loading = true;
      state.error = null;
    },
    [logOut.fulfilled](state) {
      state.loading = false;
      state.user = {
        name: null,
        email: null,
      };
      state.token = null;
      state.isLoggedIn = false;
    },
    [logOut.rejected](state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    [current.pending](state) {
      state.loading = true;
      state.error = null;
    },
    [current.fulfilled](state, action) {
      state.loading = false;
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    [current.rejected](state) {
      state.loading = false;
      state.error = 'No logged user';
    },
  },
});
