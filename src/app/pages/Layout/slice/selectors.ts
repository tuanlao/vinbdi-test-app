import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.layout || initialState;

export const selectLayout = createSelector([selectSlice], state => state);

export const selectActionStatus = createSelector(
  [selectSlice],
  giphySearchState => giphySearchState.actionStatus,
);

export const selectFavouriteIds = createSelector(
  [selectSlice],
  giphySearchState => giphySearchState.favouriteIds,
);

export const selectFavouriteIdMap = createSelector(
  [selectSlice],
  giphySearchState => giphySearchState.favouriteIdMap,
);
