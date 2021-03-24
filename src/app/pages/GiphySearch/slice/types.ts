import { GifsResult } from '@giphy/js-fetch-api';

/* --- STATE --- */
export interface GiphySearchState {
  gifs: GifsResult;
  loading: boolean;
  keyword: string;
}
