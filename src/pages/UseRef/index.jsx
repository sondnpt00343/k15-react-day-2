/* eslint-disable react/prop-types */
import { useEffect, useRef, forwardRef, useImperativeHandle } from "react";

const styles = {
    textInput: {
        display: "block",
    },
    label: {
        display: "block",
    },
    input: {
        padding: "4px 10px",
        borderRadius: 5,
        border: "1px solid #ccc",
    },
    error: {
        color: "red",
        fontSize: 14,
    },
};

const TextInput = forwardRef(
    ({ label, type = "text", value, error, ...passProps }, ref) => {
        const inputRef = useRef();

        useImperativeHandle(
            ref,
            () => {
                return {
                    focus() {
                        inputRef.current.focus();
                    },
                };
            },
            []
        );

        return (
            <div style={styles.textInput}>
                <span style={styles.label}>{label}</span>
                <input
                    {...passProps}
                    ref={inputRef}
                    style={styles.input}
                    type={type}
                    value={value}
                />
                {error && <p style={styles.error}>{error}</p>}
            </div>
        );
    }
);

TextInput.displayName = "TextInput";

function UseRef() {
    const wrapperRef = useRef(null);

    useEffect(() => {
        console.log(wrapperRef.current);
    }, []);

    return (
        <div>
            <h1>UseRef</h1>
            <TextInput
                ref={wrapperRef}
                label="Email"
                placeholder="Enter email..."
            />
            <button
                onClick={() => {
                    wrapperRef.current.focus();
                }}
            >
                Focus
            </button>
        </div>
    );
}

export default UseRef;
