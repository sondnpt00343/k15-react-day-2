/* eslint-disable react/prop-types */
import { useState } from "react";
import ThemeContext from "./Context";

const Provider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    const values = {
        theme,
        toggle() {
            setTheme(theme === "light" ? "dark" : "light");
        },
    };

    return (
        <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
    );
};

export default Provider;
