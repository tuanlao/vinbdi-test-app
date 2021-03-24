import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.giphySearch || initialState;

export const selectGiphySearch = createSelector([selectSlice], state => state);

export const selectLoading = createSelector(
  [selectSlice],
  giphySearchState => giphySearchState.loading,
);

export const selectKeyword = createSelector(
  [selectSlice],
  giphySearchState => giphySearchState.keyword,
);

export const selectGifs = createSelector(
  [selectSlice],
  giphySearchState => giphySearchState.gifs,
);

export const selectPagination = createSelector(
  [selectSlice],
  giphySearchState => giphySearchState.gifs.pagination,
);
