/**
 *
 * Asynchronously loads the component for GiphyFavourites
 *
 */

import { lazyLoad } from 'utils/loadable';

export const GiphyFavourites = lazyLoad(
  () => import('./index'),
  module => module.GiphyFavourites,
);
