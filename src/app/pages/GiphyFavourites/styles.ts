import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  wrapper: {
    padding: 20,
    height: 'calc(100vh - 64px)',
    display: 'flex',
    justifyContent: 'center',
  },
  giphyWapper: {
    width: 800,
    height: 'calc(100vh - 172px)',
    overflow: 'auto',
    margin: '20px 0px',
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
      zIndex: 1,
      cursor: 'pointer',
      opacity: 1,
    },
  },
}));

export { useStyles };
