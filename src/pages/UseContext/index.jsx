import { useEffect } from "react";
import useTheme from "@/hooks/useTheme";

// Built-in hooks: Hooks có sẵn của React
// Custom hooks: Hooks tự tạo ra (tùy chỉnh)
// - Bắt đầu bằng "use", ... (Rules of hooks)
// - Dùng hook khác ở bên trong
// => Tái sử dụng logic / tránh lặp code khi dùng hook

// Cách tư duy để custom hook:
// 1. Xác định code dùng hook bị lặp. Ví dụ: Lặp nhiều lần lấy giá trị theme
// 2. Xác định tên hook. Ví dụ: useTheme
// 3. Chuyển code bị lặp vào trong custom hook

function Example1() {
    const { theme, toggle } = useTheme();
    const isLight = theme === "light";

    useEffect(() => {
        document.body.style.background = isLight ? "#fff" : "#333";
    }, [theme, isLight]);

    return (
        <>
            <h1
                style={{
                    color: isLight ? "#333" : "#ffff",
                }}
            >
                UseContext
            </h1>
            <button onClick={toggle}>{isLight ? "Dark" : "Light"}</button>
        </>
    );
}

function UseContext() {
    return (
        <div>
            <Example1 />
        </div>
    );
}

export default UseContext;

// Bài tập trên lớp: Sử dụng theme với Context API

// 1. Tạo /src/context/ThemeContext
// - Provider.jsx: export mặc định component Provider
// - Context.js: export mặc định Context
// - index.jsx: exports ThemeContext và ThemeProvider

// 2. Tạo một page bất kỳ có:
// - Có 1 thẻ button "Toggle" click để đổi theme
// - Có 1 thẻ h1 với nội dung tùy ý. Khi ở theme sáng thì h1 có màu nền #fff, màu chữ #333; theme tối thì ngược lại.
