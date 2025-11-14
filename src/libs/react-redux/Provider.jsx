/* eslint-disable react/prop-types */
import Context from "./Context";

function Provider({ children, store }) {
    return <Context.Provider value={store}>{children}</Context.Provider>;
}

export default Provider;
