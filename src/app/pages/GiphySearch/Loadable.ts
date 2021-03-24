/**
 *
 * Asynchronously loads the component for GiphySearch
 *
 */

import { lazyLoad } from 'utils/loadable';

export const GiphySearch = lazyLoad(
  () => import('./index'),
  module => module.GiphySearch,
);
