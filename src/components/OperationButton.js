import { ACTIONS } from "../App";

function OperationButton({ operation, dispatch }) {
    return (
        <button onClick={() => dispatch({ type: ACTIONS.OPERATION, payload: { operation } })}>
            {operation}
        </button>
    );
}

export default OperationButton;