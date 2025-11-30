/* eslint-disable react/prop-types */
import { Navigate } from "react-router";

const isLoading = false;
const isError = false;

function PrivateRoute({ children }) {
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <Navigate to="/login" />;
    }

    return children;
}

export default PrivateRoute;
