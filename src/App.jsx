import { Route, BrowserRouter as Router, Routes } from "react-router";

import PrivateRoute from "./components/PrivateRoute";
import routes from "./routes";
import { Fragment } from "react";

function App() {
    return (
        <Router>
            <Routes>
                {routes.map((route, index) => {
                    const Layout = route.layout;
                    return (
                        <Route key={index} element={<Layout />}>
                            {route.children.map((child, index) => {
                                const Component = child.component;
                                const PageWrapper = child.private
                                    ? PrivateRoute
                                    : Fragment;
                                return (
                                    <Route
                                        key={index}
                                        path={child.path}
                                        element={
                                            <PageWrapper>
                                                <Component />
                                            </PageWrapper>
                                        }
                                    />
                                );
                            })}
                        </Route>
                    );
                })}
            </Routes>
        </Router>
    );
}

export default App;
