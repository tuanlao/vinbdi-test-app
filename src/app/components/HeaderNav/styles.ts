import { makeStyles } from '@material-ui/core/styles';
import { StyleConstants } from 'styles/StyleConstants';
// import { primaryColor, hoverColor } from '../../styles';

const useStyle = makeStyles(() => ({
  wrapper: {
    height: StyleConstants.NAV_BAR_HEIGHT,
    borderBottom: 'solid 1px rgba(0, 0, 0, 0.14)',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  logo: {
    height: 36,
  },
  item: {
    display: 'flex',
  },
  button: {
    fontWeight: 'bold',
    '& .MuiButton-label': {
      display: 'flex',
      flexDirection: 'column',
    },
    '& .MuiButton-startIcon': {
      marginLeft: 0,
      marginRight: 0,
    },
  },
  buttonActive: {
    color: '#d77158',
    fontWeight: 'bold',
  },
}));

export { useStyle };
