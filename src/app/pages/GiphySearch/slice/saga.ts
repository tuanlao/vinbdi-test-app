import { call, put, select, takeLatest } from 'redux-saga/effects';

import { GiphyService } from 'services';
import { LIMIT } from 'utils/constants';
import { layoutActions } from 'app/pages/Layout/slice';
import { giphySearchActions as actions } from '.';
import { selectPagination } from './selectors';

function* searchGifs(action) {
  try {
    const pagination = yield select(selectPagination);
    const gifs = yield call(GiphyService.searchGifs, action.payload, {
      offset: pagination.offset + pagination.count,
      limit: LIMIT,
    });
    yield put(actions.searchGifsSuccess(gifs));
  } catch (error) {
    yield put(actions.searchGifsFail());
    yield put(
      layoutActions.showSnackBar({
        type: 'error',
        message: error.message || 'An error occurred. Please try again!',
      }),
    );
  }
}

export function* giphySearchSaga() {
  yield takeLatest(actions.searchGifs.type, searchGifs);
}
