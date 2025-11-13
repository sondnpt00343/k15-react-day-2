import { useReducer } from "react";
import reducer from "./reducer";
import { DECREASE, INCREASE } from "./consts";

function UseReducer() {
    const [count, dispatch] = useReducer(reducer, 0);
    // dispatch: là 1 hàm khi gọi sẽ nhận 1 action, gọi mỗi khi muốn thực hiện 1 hành động.
    // Khi gọi dispatch({ type: "increase" }) thì reducer sẽ được gọi.

    return (
        <div>
            <h1>Count is {count}</h1>
            <button onClick={() => dispatch({ type: INCREASE })}>
                Increase
            </button>
            <button onClick={() => dispatch({ type: DECREASE })}>
                Decrease
            </button>
            <button onClick={() => dispatch({ type: INCREASE, payload: 5 })}>
                Jump
            </button>
        </div>
    );
}

export default UseReducer;
