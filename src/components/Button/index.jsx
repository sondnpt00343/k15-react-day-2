import PropTypes from "prop-types";
// prop-types: Là một thư viện dùng để validation cho props. Được install sẵn
// khi tạo dự án với Vite

/*
    {
        id: 1,
        name: "Nguyen Van A",
        age: 18
    }
*/

function Button({
    type = "button",
    size = "m",
    link,
    data,
    children,
    onClick,
}) {
    return (
        <button type={type} onClick={onClick}>
            {children}
        </button>
    );
}

Button.propTypes = {
    type: PropTypes.string,
    size: PropTypes.oneOf(["s", "m", "l"]),
    children: PropTypes.node,
    data: PropTypes.exact({
        id: PropTypes.number,
        name: PropTypes.string,
        age: PropTypes.number,
    }),
    link: (props, propName, componentName) => {
        const value = props[propName];
        if (
            value &&
            !value.startsWith("http://") &&
            !value.startsWith("https://")
        ) {
            return new Error(
                "Invalid prop `" +
                    propName +
                    "` supplied to" +
                    " `" +
                    componentName +
                    "`. Validation failed."
            );
        }
    },
    onClick: PropTypes.func,
};

export default Button;
