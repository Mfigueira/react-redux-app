import { Component } from 'react';
import { connect } from 'react-redux';
import { counterActions } from '../store/counter-slice';
import classes from './Counter.module.css';

// Class based component approach
class Counter extends Component {
  hanldeIncrement() {
    this.props.increment();
  }

  hanldeIncrementByFive() {
    this.props.increaseFive();
  }

  hanldeDecrement() {
    this.props.decrement();
  }

  toggleCounterHandler() {
    this.props.toggle();
  }

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        {this.props.show && (
          <div className={classes.value}>{this.props.counter}</div>
        )}
        <div>
          <button onClick={this.hanldeIncrement.bind(this)}>Increment</button>
          <button onClick={this.hanldeIncrementByFive.bind(this)}>
            Increase by 5
          </button>
          <button onClick={this.hanldeDecrement.bind(this)}>Decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler.bind(this)}>
          Toggle Counter
        </button>
      </main>
    );
  }
}

// FN to make state available like props in class component
const mapStateToProps = state => ({
  counter: state.counter.counter,
  show: state.counter.show,
});

// FN to make actions available like props in class component
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(counterActions.increment()),
  increaseFive: () => dispatch(counterActions.increase(5)),
  decrement: () => dispatch(counterActions.decrement()),
  toggle: () => dispatch(counterActions.toggle()),
});

// Exporting the connect HOC (High order function component)
// - It manages the subscription of the Component to the Store
// - Alternative to use 'useSelector' and 'useDispatch'
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
