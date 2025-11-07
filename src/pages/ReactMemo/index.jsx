/* eslint-disable react/prop-types */
import { useState, memo } from "react";

const ChildComponent = memo(
    ({ count, onIncrease }) => {
        console.log("re-render");

        return (
            <div>
                <h2>Child component {count}</h2>
                <button onClick={onIncrease}>Count is {count}</button>
            </div>
        );
    },
    (prev, next) => prev.count === next.count
);

ChildComponent.displayName = "ChildComponent";

function ReactMemo() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    const handleIncrease = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h1>ReactMemo</h1>
            <ChildComponent count={count} onIncrease={handleIncrease} />
            <button onClick={() => setCount2(count2 + 1)}>
                Count2 is {count2}
            </button>
        </div>
    );
}

export default ReactMemo;
