import { useReducer } from "react";
import './App.css';
import DigitButton from "./components/DigitButton";

export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CLEAR: "clear"
}

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      return {
        ...state,
        currOperand: `${state.currOperand || ""}${payload}`
      };
    case ACTIONS.CLEAR:
      return {};
    default:
      return state;
  }
}

function App() {
  const [{ prevOperand, currOperand, operation }, dispatch] = useReducer(reducer, {});

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="prev-operand">{prevOperand}</div>
        <div className="сurr-operand">{currOperand}</div>
      </div>
      <button className='span-two' onClick={() => dispatch({ type: ACTIONS.CLEAR })}>AC</button>
      <button>Del</button>
      <button>/</button>
      <DigitButton value="1" dispatch={dispatch} />
      <DigitButton value="2" dispatch={dispatch} />
      <DigitButton value="3" dispatch={dispatch} />
      <button>*</button>
      <DigitButton value="4" dispatch={dispatch} />
      <DigitButton value="5" dispatch={dispatch} />
      <DigitButton value="6" dispatch={dispatch} />
      <button>+</button>
      <DigitButton value="7" dispatch={dispatch} />
      <DigitButton value="8" dispatch={dispatch} />
      <DigitButton value="9" dispatch={dispatch} />
      <button>-</button>
      <DigitButton value="0" dispatch={dispatch} />
      <DigitButton value="." dispatch={dispatch} />
      <button className='span-two'>=</button>
    </div>
  );
}

export default App;
