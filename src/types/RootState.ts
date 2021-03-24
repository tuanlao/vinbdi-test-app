import { ThemeState } from 'styles/theme/slice/types';
import { GiphySearchState } from 'app/pages/GiphySearch/slice/types';
import { LayoutState } from 'app/pages/Layout/slice/types';
import { GiphyFavouritesState } from 'app/pages/GiphyFavourites/slice/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
  Properties are optional because they are injected when the components are mounted sometime in your application's life. 
  So, not available always
*/
export interface RootState {
  theme?: ThemeState;
  giphySearch?: GiphySearchState;
  layout?: LayoutState;
  giphyFavourites?: GiphyFavouritesState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
