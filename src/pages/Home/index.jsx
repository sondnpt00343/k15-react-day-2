import { useState } from "react";

import Button from "@/components/Button";

// Hooks: Móc, quy tắc:
// - Luôn bắt đầu bằng "use"
// - Phải dùng ở top-level (không nằm trong bất cứ ngoặc nào, ngoại từ ngoặc {} của chính component)
// - Không được nằm sau bất cứ "return" nào

// Có 2 loại hooks:
// - Built-in (có sẵn) hook: Là các hook của React cung cấp
// - Custom hook: Là các hook tự tạo

// Học về state:
// - Sử dụng "useState" hook.
// - Syntax: const [state, setState] = useState(initialValue)
// - Điều gì xảy ra khi setState?
//  1. Lên lịch cho việc cập state
//  2. Cập nhật lại state
//  3. Re-render component (Gọi lại component/hàm với giá mới của state)

function Home() {
    const [count, setCount] = useState(0);

    console.log("Re-render: ", count);

    return (
        <div>
            <h1>Home</h1>
            <Button
                size="s"
                data={{ id: 123 }}
                link="http://google.com"
                type="button"
                onClick={() => setCount(count + 1)}
            >
                Count is {count}
            </Button>
        </div>
    );
}

export default Home;
