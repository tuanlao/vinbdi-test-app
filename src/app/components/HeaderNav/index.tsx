import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useHistory } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';

import Logo from './assets/logo.png';
import { useStyle } from './styles';
import { messages } from './messages';

interface Props {
  numberOfFavourites: number;
}

const HeaderNav = memo((props: Props) => {
  const { t } = useTranslation();
  const location = useLocation();
  const history = useHistory();
  const classes = useStyle();
  const { numberOfFavourites } = props;

  const goHome = useCallback(() => {
    history.push('/');
  }, [history]);

  const goSearch = useCallback(() => {
    history.push('/search');
  }, [history]);

  const goFavourites = useCallback(() => {
    history.push('/favourites');
  }, [history]);

  const isActive = useCallback(
    path => {
      return (
        (location.pathname === '/' && path === 'search') ||
        location.pathname.includes(path)
      );
    },
    [location],
  );

  return (
    <Grid className={classes.wrapper} container>
      <Grid item className={classes.item}>
        <Button onClick={goHome}>
          <img src={Logo} alt="vinbdi" className={classes.logo} />
        </Button>
      </Grid>
      <Grid item className={classes.item}>
        <Button
          onClick={goSearch}
          className={`${classes.button} ${
            isActive('search') ? classes.buttonActive : ''
          }`}
          startIcon={<SearchIcon />}
        >
          {t(...messages.search())}
        </Button>
      </Grid>
      <Grid item className={classes.item}>
        <Button
          onClick={goFavourites}
          className={`${classes.button} ${
            isActive('favourites') ? classes.buttonActive : ''
          }`}
          startIcon={<FavoriteIcon />}
        >
          {`${t(...messages.favourites())}(${numberOfFavourites})`}
        </Button>
      </Grid>
    </Grid>
  );
});

export default HeaderNav;
