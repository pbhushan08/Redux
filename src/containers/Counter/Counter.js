import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter}  />
                <hr />
                <button onClick = {this.props.onStoreResult}>Show Results</button>
                <ul>
                    {this.props.storedResults.map(strResult => 
                        <li key = {strResult.id} onClick = {() => this.props.onDeleteResult(strResult.id)}>{strResult.val}</li>
                    )}
                 
                </ul>
                
            </div>
        );
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({ type: 'INCREMENT' }),
        onDecrementCounter: () => dispatch( { type: 'DECREMENT' }),
        onAddCounter: () => dispatch( { type: 'ADD', value: 5 } ),
        onSubtractCounter: () => dispatch( { type: 'SUBTRACT', value: 5 } ),
        onStoreResult: () => dispatch( { type: 'STORE_RESULT'}),
        onDeleteResult: (id) => dispatch( { type: 'DELETE_RESULT', resultElId: id }),
    };
};

const mapStateToProps = state => {
    return {
        ctr: state.counter,
        storedResults: state.results
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(Counter);