import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Typography, TextField } from '@material-ui/core';
import useStyles from './style';
import withHoc from './CounterHoc';

const Counter = ({ count, increment, decrement }) => {
  const classes = useStyles();
  const [value, setValue] = useState(1);

  const changeValue = ({ target }) => {
    if (target.value.length === 0) {
      setValue(1);
    } else {
      const val = target.value.replace(/[^+\d]/g, '');
      setValue(val);
    }
  };

  return (
    <div className={classes.counter}>
      <TextField
        className={classes.changeValue}
        type="number"
        label="Изменить значение"
        value={value}
        onChange={changeValue}
        margin="normal"
        inputProps={{ style: { textAlign: 'center', fontSize: '1.35rem' } }}
      />
      <Typography variant="h1">{count}</Typography>
      <div className={classes.buttonGroup}>
        <Button className={classes.button} onClick={() => decrement(Number(value))}>
          -
          { value }
        </Button>
        <Button className={classes.button} onClick={() => increment(Number(value))}>
          +
          { value }
        </Button>
      </div>
    </div>
  );
};

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};

export default withHoc(Counter);
