import counterConstants from './constants';

const initialValue = { value: 0 };

function counterReducer(state = initialValue, { type, payload }) {
  switch (type) {
    case counterConstants.INCREMENT: {
      return { value: state.value + 1 };
    }
    case counterConstants.DECREMENT: {
      return { value: state.value - 1 };
    }
    case counterConstants.CHANGE: {
      return { value: payload };
    }
    case counterConstants.INITIAL: {
      return initialValue;
    }
    default: {
      return initialValue;
    }
  }
}

export { counterReducer, counterConstants };
