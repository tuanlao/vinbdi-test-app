import { IGif } from '@giphy/js-types';

export interface GiphyFavouritesState {
  favourites: {
    [key: string]: IGif;
  };
}
