import types from '../actions/types';

const { COUNTER_DECREMENT, COUNTER_INCREMENT } = types;

export default (state, action) => {
  if (state === undefined) {
    return {
      count: 0,
    };
  }
  switch (action.type) {
    case COUNTER_DECREMENT:
      return {
        count: state.counter.count - action.payload,
      };
    case COUNTER_INCREMENT:
      return {
        count: state.counter.count + action.payload,
      };
    default:
      return state.counter;
  }
};
