import { useReducer } from "react";
import './App.css';
import DigitButton from "./components/DigitButton";
import OperationButton from "./components/OperationButton";

export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CLEAR: "clear",
  OPERATION: "operation",
  EQUALS: "equals"
}

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          prevOperand: state.currOperand,
          currOperand: payload.value,
          overwrite: false
        }
      } else {
        return {
          ...state,
          currOperand: `${state.currOperand || ""}${payload.value}`
        };
      }
    case ACTIONS.CLEAR:
      return {};
    case ACTIONS.OPERATION:
      if (!state.prevOperand) {
        return {
          ...state,
          operation: payload.operation,
          prevOperand: state.currOperand,
          currOperand: null
        }
      }
      else {
        return {
          ...state,
          operation: payload.operation,
          prevOperand: evaluate(state.prevOperand, state.currOperand, state.operation),
          currOperand: null,
          overwrite: true
        }
      }

    case ACTIONS.EQUALS:
      return {
        ...state,
        operation: null,
        prevOperand: null,
        currOperand: evaluate(state.prevOperand, state.currOperand, state.operation),
        overwrite: true
      }
    default:
      return state;
  }
}

function evaluate(prev, curr, operation) {
  prev = parseFloat(prev);
  curr = parseFloat(curr);
  switch (operation) {
    case "/":
      return prev / curr;
    case "*":
      return prev * curr;
    case "+":
      return prev + curr;
    case "-":
      return prev - curr;
    default:
      return;
  }
}

function App() {
  const [{ prevOperand, currOperand, operation }, dispatch] = useReducer(reducer, {});

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="prev-operand">{prevOperand}{operation}</div>
        <div className="сurr-operand">{currOperand}</div>
      </div>
      <button className='span-two' onClick={() => dispatch({ type: ACTIONS.CLEAR })}>AC</button>
      <button>Del</button>
      <OperationButton operation="/" dispatch={dispatch} />
      <DigitButton value="1" dispatch={dispatch} />
      <DigitButton value="2" dispatch={dispatch} />
      <DigitButton value="3" dispatch={dispatch} />
      <OperationButton operation="*" dispatch={dispatch} />
      <DigitButton value="4" dispatch={dispatch} />
      <DigitButton value="5" dispatch={dispatch} />
      <DigitButton value="6" dispatch={dispatch} />
      <OperationButton operation="+" dispatch={dispatch} />
      <DigitButton value="7" dispatch={dispatch} />
      <DigitButton value="8" dispatch={dispatch} />
      <DigitButton value="9" dispatch={dispatch} />
      <OperationButton operation="-" dispatch={dispatch} />
      <DigitButton value="0" dispatch={dispatch} />
      <DigitButton value="." dispatch={dispatch} />
      <button className='span-two' onClick={() => dispatch({ type: ACTIONS.EQUALS })}>=</button>
    </div>
  );
}

export default App;
