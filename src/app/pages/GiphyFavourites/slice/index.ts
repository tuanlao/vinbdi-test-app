import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { IGif } from '@giphy/js-types';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { giphyFavouritesSaga } from './saga';
import { GiphyFavouritesState } from './types';

export const initialState: GiphyFavouritesState = {
  favourites: {},
};

const slice = createSlice({
  name: 'giphyFavourites',
  initialState,
  reducers: {
    addGif(state, action: PayloadAction<IGif>) {
      const gif = action.payload;
      state.favourites = { ...state.favourites, [gif.id]: gif };
    },
    getFavouriteGifs(state, action: PayloadAction<string[]>) {},
    getFavouriteGifsSuccess(state, action: PayloadAction<IGif[]>) {
      const favouritesMap: any = {};
      action.payload.forEach(gif => (favouritesMap[gif.id] = gif));
      state.favourites = { ...state.favourites, ...favouritesMap };
    },
  },
});

export const { actions: giphyFavouritesActions } = slice;

export const useGiphyFavouritesSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: giphyFavouritesSaga });
  return { actions: slice.actions };
};
