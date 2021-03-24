import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.giphyFavourites || initialState;

export const selectGiphyFavourites = createSelector(
  [selectSlice],
  state => state,
);

export const selectFavouriteItems = createSelector(
  [selectSlice],
  state => state.favourites,
);
