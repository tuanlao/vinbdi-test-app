import React, { memo, useEffect, useState } from 'react';
import Snackbar, { SnackbarOrigin } from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import { ActionStatus } from 'types';

interface Props {
  open: boolean;
  vertical?: 'top' | 'bottom';
  horizontal?: 'left' | 'right' | 'center';
  action?: ActionStatus;
  onClose?: () => void;
}

function CustomSnackbar(props: Props) {
  const {
    open,
    vertical = 'top',
    horizontal = 'right',
    action,
    onClose,
  } = props;
  const [state, setState] = useState<SnackbarOrigin>({
    vertical: 'top',
    horizontal: 'right',
  });
  const [currentAction, setCurrentAction] = useState<ActionStatus>({
    type: 'success',
    message: '',
  });

  useEffect(() => {
    setState({
      vertical: vertical,
      horizontal: horizontal,
    });
  }, [open, vertical, horizontal]);

  useEffect(() => {
    if (action) {
      setCurrentAction(action);
    }
  }, [action]);

  return (
    <Snackbar
      anchorOrigin={state}
      key={`${vertical},${horizontal}`}
      autoHideDuration={4000}
      open={open}
      onClose={onClose}
    >
      <Alert
        onClose={onClose}
        severity={currentAction?.type}
        elevation={6}
        variant="filled"
      >
        {action?.message}
      </Alert>
    </Snackbar>
  );
}

export default memo(CustomSnackbar);
