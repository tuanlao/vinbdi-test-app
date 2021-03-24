import { call, put, takeLatest } from 'redux-saga/effects';
import { GiphyService } from 'services';

import { layoutActions } from 'app/pages/Layout/slice';
import { giphyFavouritesActions as actions } from '.';

function* getFavouriteGifs(action) {
  try {
    const gifs = yield call(GiphyService.getGifsById, action.payload);
    yield put(actions.getFavouriteGifsSuccess(gifs.data));
  } catch (error) {
    yield put(
      layoutActions.showSnackBar({
        type: 'error',
        message: error.message || 'An error occurred. Please try again!',
      }),
    );
  }
}

export function* giphyFavouritesSaga() {
  yield takeLatest(actions.getFavouriteGifs.type, getFavouriteGifs);
}
