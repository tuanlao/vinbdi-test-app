import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  wrapper: {
    padding: 20,
    height: 'calc(100vh - 64px)',
  },
  searchWrapper: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  giphyWapper: {
    width: '100%',
    height: 'calc(100vh - 172px)',
    overflow: 'auto',
    margin: '20px 0px',
    padding: '0px 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  grid: {
    height: 'fit-content',
    maxWidth: 800,
  },
  gridTile: {
    width: '200px !important',
    '& .MuiGridListTile-tile': {
      position: 'relative',
    },
    '& .MuiSvgIcon-root': {
      position: 'absolute',
      color: 'red',
      bottom: 10,
      right: 10,
      zIndex: -1,
      cursor: 'pointer',
      opacity: 0.6,
    },
    '& .MuiSvgIcon-root.iconActive': {
      zIndex: 1,
      opacity: 1,
    },
    '&:hover': {
      '& .MuiSvgIcon-root': {
        zIndex: 1,
      },
    },
  },
  loadingWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    marginTop: 20,
  },
}));

export { useStyles };
