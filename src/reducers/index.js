import counter from './counter';

const reducer = (state, action) => {
  return {
    counter: counter(state, action),
  };
};

export default reducer;
