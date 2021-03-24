import { GifsResult } from '@giphy/js-fetch-api';
import giphyFetch from 'utils/giphy';

const searchGifs = async (
  keyword: string,
  options: { limit: number; offset: number },
): Promise<GifsResult> => {
  return giphyFetch.search(keyword, options);
};

const getGifsById = async (ids: string[]): Promise<GifsResult> => {
  return giphyFetch.gifs(ids);
};

export { searchGifs, getGifsById };
