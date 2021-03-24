import React, { memo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Gif } from '@giphy/react-components';
import Button from '@material-ui/core/Button';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SearchBar from 'app/components/SearchBar';
import { LoadingIndicator } from 'app/components/LoadingIndicator';

import { StyleConstants } from 'styles/StyleConstants';
import { layoutActions } from 'app/pages/Layout/slice';
import { giphyFavouritesActions } from 'app/pages/GiphyFavourites/slice';
import { selectFavouriteIdMap } from 'app/pages/Layout/slice/selectors';
import { selectGifs, selectKeyword, selectLoading } from './slice/selectors';
import { useGiphySearchSlice } from './slice';
import { useStyles } from './styles';

export const GiphySearch = memo(() => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { actions } = useGiphySearchSlice();
  const gifs = useSelector(selectGifs);
  const keyword = useSelector(selectKeyword);
  const loading = useSelector(selectLoading);
  const favouriteIdMap = useSelector(selectFavouriteIdMap);

  const onChange = useCallback(
    keyword => {
      dispatch(actions.setKeyword(keyword));
    },
    [actions, dispatch],
  );

  const onSearch = useCallback(() => {
    dispatch(actions.clearGifs());
    dispatch(actions.searchGifs(keyword));
  }, [keyword, actions, dispatch]);

  const loadMore = useCallback(() => {
    dispatch(actions.searchGifs(keyword));
  }, [keyword, actions, dispatch]);

  const onClickFavourite = useCallback(
    gif => {
      dispatch(layoutActions.clickFavourite(gif.id));
      dispatch(giphyFavouritesActions.addGif(gif));
    },
    [dispatch],
  );

  return (
    <div className={classes.wrapper}>
      <div className={classes.searchWrapper}>
        <SearchBar onChange={onChange} onSearch={onSearch} value={keyword} />
      </div>
      <div className={classes.giphyWapper}>
        <GridList
          cellHeight={StyleConstants.GIF_HEIGHT}
          className={classes.grid}
          cols={4}
        >
          {gifs.data.map((gif, index) => (
            <GridListTile key={index} className={classes.gridTile}>
              <Gif
                gif={gif}
                hideAttribution
                width={StyleConstants.GIF_WIDTH}
                height={StyleConstants.GIF_HEIGHT}
                noLink
              />
              <FavoriteIcon
                onClick={() => onClickFavourite(gif)}
                className={favouriteIdMap[gif.id] ? 'iconActive' : ''}
              />
            </GridListTile>
          ))}
        </GridList>
        {!loading &&
          gifs.data.length < gifs.pagination.total_count &&
          gifs.data.length > 0 && (
            <Button
              variant="contained"
              color="primary"
              onClick={loadMore}
              className={classes.button}
            >
              Load More
            </Button>
          )}
        {loading && (
          <div className={classes.loadingWrapper}>
            <LoadingIndicator />
          </div>
        )}
      </div>
    </div>
  );
});
