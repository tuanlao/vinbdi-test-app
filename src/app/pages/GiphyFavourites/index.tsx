import React, { memo, useMemo, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Gif } from '@giphy/react-components';

import { StyleConstants } from 'styles/StyleConstants';
import { selectFavouriteIds } from 'app/pages/Layout/slice/selectors';
import { layoutActions } from 'app/pages/Layout/slice';
import { useGiphyFavouritesSlice } from './slice';
import { selectFavouriteItems } from './slice/selectors';
import { useStyles } from './styles';

interface Props {}

export const GiphyFavourites = memo((props: Props) => {
  const { actions } = useGiphyFavouritesSlice();
  const dispath = useDispatch();
  const classes = useStyles();
  const favourites = useSelector(selectFavouriteItems);
  const favouriteIds = useSelector(selectFavouriteIds);

  useEffect(() => {
    const ids = favouriteIds.filter(id => !favourites[id]);
    if (ids.length) {
      dispath(actions.getFavouriteGifs(ids));
    }
  }, [dispath, actions, favouriteIds, favourites]);

  const likedGifs = useMemo(() => {
    return favouriteIds.filter(id => favourites[id]).map(id => favourites[id]);
  }, [favourites, favouriteIds]);

  const onClickDislike = useCallback(
    gif => {
      dispath(layoutActions.clickFavourite(gif.id));
    },
    [dispath],
  );

  return (
    <div className={classes.wrapper}>
      <div className={classes.giphyWapper}>
        <GridList
          className={classes.grid}
          cellHeight={StyleConstants.GIF_HEIGHT}
        >
          {likedGifs.map((gif, index) => (
            <GridListTile key={index} className={classes.gridTile}>
              <Gif
                gif={gif}
                hideAttribution
                width={StyleConstants.GIF_WIDTH}
                height={StyleConstants.GIF_HEIGHT}
                noLink
              />
              <FavoriteIcon onClick={() => onClickDislike(gif)} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </div>
  );
});
