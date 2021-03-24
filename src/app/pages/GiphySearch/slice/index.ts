import { PayloadAction } from '@reduxjs/toolkit';
import { GifsResult } from '@giphy/js-fetch-api';

import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { giphySearchSaga } from './saga';
import { GiphySearchState } from './types';

const initialGifs = {
  data: [],
  pagination: {
    count: 0,
    offset: 0,
    total_count: 1,
  },
  meta: {
    msg: '',
    response_id: '',
    status: 200,
  },
};

export const initialState: GiphySearchState = {
  loading: false,
  keyword: '',
  gifs: initialGifs,
};

const slice = createSlice({
  name: 'giphySearch',
  initialState,
  reducers: {
    setKeyword(state, action: PayloadAction<string>) {
      state.keyword = action.payload;
    },
    clearGifs(state) {
      state.gifs = initialGifs;
    },
    searchGifs(state, action: PayloadAction<string>) {
      state.loading = true;
    },
    searchGifsSuccess(state, action: PayloadAction<GifsResult>) {
      state.gifs = {
        ...action.payload,
        data: [...state.gifs.data, ...action.payload.data],
      };
      state.loading = false;
    },
    searchGifsFail(state) {
      state.loading = false;
    },
  },
});

export const { actions: giphySearchActions } = slice;

export const useGiphySearchSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: giphySearchSaga });
  return { actions: slice.actions };
};
