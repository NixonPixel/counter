import { compose } from 'recompose';
import { connect } from 'react-redux';
import creators from '../../actions/creators';

const { increment, decrement } = creators;

const mapStateToProps = ({ counter }) => ({
  count: counter.count,
});

const mapDispatchToProps = (_dispatch) => ({
  increment: (value) => _dispatch(increment(value)),
  decrement: (value) => _dispatch(decrement(value)),
});

export default compose(connect(mapStateToProps, mapDispatchToProps));
