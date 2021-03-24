import React, { memo, useCallback } from 'react';

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import { useStyles } from './styles';

interface Props {
  onChange: (value: string) => void;
  onSearch: () => void;
  value: string;
}

const SearchBar = memo((props: Props) => {
  const classes = useStyles();
  const { onSearch, onChange, value } = props;

  const handleChangeValue = useCallback(
    event => {
      onChange(event.target.value);
    },
    [onChange],
  );

  const onKeyPress = useCallback(
    event => {
      if (event.charCode === 13) {
        onSearch();
      }
    },
    [onSearch],
  );

  return (
    <Paper className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search Giphy"
        onChange={handleChangeValue}
        value={value}
        onKeyPress={onKeyPress}
      />
      <IconButton
        className={classes.iconButton}
        aria-label="search"
        onClick={onSearch}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
});

export default SearchBar;
