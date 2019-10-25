import types from './types';

const { COUNTER_DECREMENT, COUNTER_INCREMENT } = types;

const increment = (value) => ({
  type: COUNTER_INCREMENT,
  payload: value,
});

const decrement = (value) => ({
  type: COUNTER_DECREMENT,
  payload: value,
});

export default {
  increment,
  decrement,
};
