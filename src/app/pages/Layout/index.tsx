import React, { memo, useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import HeaderNav from 'app/components/HeaderNav';
import SnackBar from 'app/components/SnackBar';
import { useGiphyFavouritesSlice } from 'app/pages/GiphyFavourites/slice';
import { useStyle } from './styles';
import { selectActionStatus, selectFavouriteIds } from './slice/selectors';
import { useLayoutSlice } from './slice';

interface Props {
  children: React.ReactNode;
}

const Layout = memo((props: Props) => {
  const classes = useStyle();
  const { children } = props;
  const dispatch = useDispatch();
  const { actions } = useLayoutSlice();
  useGiphyFavouritesSlice();
  const favouritesIds = useSelector(selectFavouriteIds);
  const actionStatus = useSelector(selectActionStatus);
  const [openSnackBar, setOpenSnackBar] = useState(false);

  useEffect(() => {
    dispatch(actions.initFavouriteIds());
  }, [dispatch, actions]);

  useEffect(() => {
    if (actionStatus) {
      setOpenSnackBar(true);
    }
  }, [actionStatus, setOpenSnackBar]);

  const onCloseSnackBar = useCallback(() => {
    setOpenSnackBar(false);
  }, [setOpenSnackBar]);

  return (
    <div className={classes.wrapper}>
      <HeaderNav numberOfFavourites={favouritesIds.length} />
      <div className={classes.content}>{children}</div>
      <SnackBar
        open={openSnackBar}
        onClose={onCloseSnackBar}
        action={actionStatus}
      />
    </div>
  );
});

export default Layout;
