import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer } from 'utils/redux-injectors';
import { ActionStatus } from 'types';
import { LayoutState } from './types';

export const initialState: LayoutState = {
  favouriteIds: [],
  favouriteIdMap: {},
};

const slice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    showSnackBar(state, action: PayloadAction<ActionStatus>) {
      state.actionStatus = action.payload;
    },
    initFavouriteIds(state) {
      const favouriteIdsString = localStorage.getItem('favouriteIds');
      try {
        const favouriteIds: string[] = JSON.parse(favouriteIdsString || '[]');
        state.favouriteIds = favouriteIds;
        const favouriteIdMap: any = {};
        favouriteIds.forEach(id => (favouriteIdMap[id] = true));
        state.favouriteIdMap = favouriteIdMap;
      } catch (error) {
        state.favouriteIds = [];
        state.favouriteIdMap = {};
      }
    },
    clickFavourite(state, action: PayloadAction<string>) {
      const id = action.payload;
      const index = state.favouriteIds.findIndex(
        favouriteId => favouriteId === id,
      );
      if (index < 0) {
        state.favouriteIds = [...state.favouriteIds, id];
        state.favouriteIdMap = {
          ...state.favouriteIdMap,
          [id]: true,
        };
        state.actionStatus = {
          type: 'success',
          message: 'Add gif to the favourites successfully',
        };
      } else {
        state.favouriteIds.splice(index, 1);
        delete state.favouriteIdMap[id];
        state.actionStatus = {
          type: 'success',
          message: 'Remove gif from the favourites successfully',
        };
      }
      localStorage.setItem('favouriteIds', JSON.stringify(state.favouriteIds));
    },
  },
});

export const { actions: layoutActions } = slice;

export const useLayoutSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { actions: slice.actions };
};
