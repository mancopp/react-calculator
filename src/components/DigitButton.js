import { ACTIONS } from "../App";

function DigitButton({ value, dispatch }) {
    return (
        <button onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { value } })}>
            {value}
        </button>
    );
}

export default DigitButton;