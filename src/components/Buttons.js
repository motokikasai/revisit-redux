import React, { Component } from 'react';
import { connect } from 'react-redux';

class Buttons extends Component {
  handleIncrement = () => {
    this.props.dispatch({ type: 'INCREMENT' });
  };

  handleDecrement = () => {
    this.props.dispatch({ type: 'DECREMENT' });
  };

  render() {
    return (
      <div>
        <button
          style={{
            fontSize: '2rem',
            width: '40px',
            background: '#5a2e08',
            border: 'none',
            borderRadius: '6px',
            color: 'white',
          }}
          onClick={this.handleDecrement}
        >
          -
        </button>
        <span
          style={{
            display: 'inline-block',
            fontSize: '2rem',
            fontWeight: '600',
            color: '#5a2e08',
            width: '100px',
          }}
        >
          {this.props.count}
        </span>
        <button
          style={{
            fontSize: '2rem',
            width: '40px',
            background: '#5a2e08',
            border: 'none',
            borderRadius: '6px',
            color: 'white',
          }}
          onClick={this.handleIncrement}
        >
          +
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.countReducer.count, // combineReducer must be taken into account!
});

export default connect(mapStateToProps)(Buttons);
