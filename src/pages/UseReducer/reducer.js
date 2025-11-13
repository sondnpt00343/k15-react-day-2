import { DECREASE, INCREASE } from "./consts";

/**
 * @param {*} state là state hiện tại
 * @param {*} action là một object mô tả hành động sẽ được thực hiện, cấu trúc
 * của nó là { type: "loại-hành-động", payload: "dữ liệu (nếu có)" }
 */
const reducer = (state, action) => {
    // Xử lý và trả về state mới => component sẽ re-render với state mới
    switch (action.type) {
        case INCREASE:
            return state + (action.payload ?? 1);
        case DECREASE:
            return state - 1;
        default:
            throw Error(`Action "${action.type}" invalid.`);
    }
};

export default reducer;
