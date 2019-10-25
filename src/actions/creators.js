import types from './types';

const { COUNTER_DECREMENT, COUNTER_INCREMENT } = types;

const increment = (value = 1) => ({
  type: COUNTER_INCREMENT,
  payload: value,
});

const decrement = (value = 1) => ({
  type: COUNTER_DECREMENT,
  payload: value,
});

export default {
  increment,
  decrement,
};
