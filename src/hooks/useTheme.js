import { useContext } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";

function useTheme() {
    const context = useContext(ThemeContext);
    return context;
}

export default useTheme;
