import { createStore } from 'redux';

// Actions Generators - function that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) =>({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount =  ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count }) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

// Reducers
// 1. Reducers are pure functions (output only determined by the input we provide | doesn't use values outside scope)

//  Not Pure
// let a = 10;
// const add = (b) => {
//     return a + b;
// }

// 2. never change state or action

const CountReducer = () => (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
        return {
            count: action.count
        }
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    }
}

const store = createStore(CountReducer);


const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})


store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 101 }));

