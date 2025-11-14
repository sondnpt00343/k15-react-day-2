import { useDispatch, useSelector } from "@/libs/react-redux";
// react-redux
// - useSelector(): Lấy state qua selector (giống getState)
// - useStore(): Lấy store
// - useDispatch(): Lấy dispatch

function Counter() {
    console.log("Counter: re-render");

    const count = useSelector((state) => state.count);
    return <h2>Count is {count}</h2>;
}

function Random() {
    console.log("Random: re-render");

    const random = useSelector((state) => state.random);
    return <h2>Random is {random}</h2>;
}

function Redux() {
    const dispatch = useDispatch();

    return (
        <div>
            <Counter />
            <Random />
            <button onClick={() => dispatch({ type: "increase" })}>
                Increase
            </button>
            <button onClick={() => dispatch({ type: "random" })}>Random</button>
        </div>
    );
}

export default Redux;
