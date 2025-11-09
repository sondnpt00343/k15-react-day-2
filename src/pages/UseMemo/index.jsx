/* eslint-disable react/prop-types */
import { memo, useCallback, useMemo, useState } from "react";

const Children = memo(({ count, onIncrease }) => {
    console.log("re-render");

    return <h1 onClick={onIncrease}>Count is {count}</h1>;
});

Children.displayName = "Children";

function expensive() {
    let result = 0;
    for (let i = 0; i < 1e9; i++) {
        result += i;
    }
    console.log("expensive logic...");

    return result;
}

function UseMemo() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    const handleIncrease1 = useCallback(() => setCount((prev) => prev + 1), []);

    const result = useMemo(() => expensive() + count, [count]);

    console.log(result);

    return (
        <div>
            <Children count={count} onIncrease={handleIncrease1} />
            <button onClick={() => setCount2(count2 + 1)}>
                Count 2 is {count2}
            </button>
        </div>
    );
}

export default UseMemo;
