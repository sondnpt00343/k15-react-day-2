/* eslint-disable react/prop-types */
import { memo, useEffect, useState } from "react";

const Children = memo(({ count, onIncrease }) => {
    console.log("re-render");

    return <h1 onClick={onIncrease}>Count is {count}</h1>;
});

Children.displayName = "Children";

function UseState() {
    // const [count, setCount] = useState(0);
    // const [count2, setCount2] = useState(0);
    const [countdown, setCountdown] = useState(60);

    // const handleIncrease1 = useCallback(() => setCount((prev) => prev + 1), []);

    useEffect(() => {
        setInterval(() => {
            setCountdown((prev) => prev - 1);
        }, 1000);
    }, []);

    return (
        <div>
            <h1>Count is {countdown}</h1>
            {/* <Children count={count} onIncrease={handleIncrease1} />
            <button onClick={() => setCount2(count2 + 1)}>
                Count 2 is {count2}
            </button> */}
        </div>
    );
}

export default UseState;
