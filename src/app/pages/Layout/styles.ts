import { makeStyles } from '@material-ui/core/styles';
import { StyleConstants } from 'styles/StyleConstants';
// import { primaryColor, hoverColor } from '../../styles';

const useStyle = makeStyles(() => ({
  wrapper: {
    width: '100%',
    height: '100vh',
  },
  content: {
    height: '100vh',
    paddingTop: StyleConstants.NAV_BAR_HEIGHT,
  },
}));

export { useStyle };
