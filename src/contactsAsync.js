import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const query = createAsyncThunk('cont', async (_, { getState }) => {
  const { loading } = getState().cont;
  if (loading !== 'pending') {
    return;
  }
  const response = await axios.get(
    'https://62821c85ed9edf7bd87eb81d.mockapi.io/contacts'
  );
  return response.data;
});

export const constSlice = createSlice({
  name: 'conts',
  initialState: {
    entities: [],
    loading: 'idle',

    error: null,
  },
  reducers: {},
  extraReducers: {
    [query.pending]: (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'pending';
      }
    },
    [query.fulfilled]: (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle';
        state.entities.push(action.payload);
      }
    },
    [query.rejected]: (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle';
        state.error = action.error;
      }
    },
  },
});

export const UsersComponent = () => {
  const { entities, loading, error } = useSelector(state => state.cont);
  const dispatch = useDispatch();

  const fetchConts = async () => {
    try {
      const user = await dispatch(query()).unwrap();
      console.log(user);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchConts();
  }, []);
};
